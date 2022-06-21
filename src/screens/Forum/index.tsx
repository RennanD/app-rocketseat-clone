import React, { forwardRef, useEffect, useRef, useState } from 'react';
import { Animated, Dimensions } from 'react-native';

import { NavBar } from '../../components/NavBar';
import { TextInput } from '../../components/TextInput';

import {
  Container,
  SectionCard,
  ScrollIndicator,
  Tab,
  TabText,
  Tabs,
} from './styles';

const { width, height } = Dimensions.get('screen');

type TabProps = {
  title: string;
};

function TabItem({ title }: TabProps, ref: any) {
  return (
    <Tab ref={ref} onPress={() => console.log('1')}>
      <TabText>{title}</TabText>
    </Tab>
  );
}

const TabItemRoot = forwardRef(TabItem);

export function Forum(): JSX.Element {
  const TABS = [
    {
      title: 'Início',
      ref: React.createRef(),
    },
    {
      title: 'Mais Quentes',
      ref: React.createRef(),
    },
    {
      title: 'Abertos',
      ref: React.createRef(),
    },
    {
      title: 'Interagidos',
      ref: React.createRef(),
    },
  ];

  const scrollX = useRef(new Animated.Value(0)).current;
  const containerRef = useRef(null);

  const [measures, setMeasures] = useState([]);

  useEffect(() => {
    const m = [];
    TABS.forEach(tab => {
      tab.ref.current?.measureLayout(
        containerRef.current,
        (x, y, width, height) => {
          m.push({
            y,
            x,
            width,
            height,
          });

          if (m.length === TABS.length) {
            setMeasures(m);
          }
        },
      );
    });
  });

  useEffect(() => {
    console.log(measures);
  }, [measures]);

  return (
    <Container>
      <NavBar />
      <SectionCard>
        <TextInput icon="search" placeholder="Digite um termo para buscar" />
        <TextInput icon="search" placeholder="Tags" />

        <Tabs ref={containerRef}>
          {TABS.map(tab => (
            <TabItemRoot ref={tab.ref} title={tab.title} />
          ))}

          {measures && (
            <ScrollIndicator
              style={{
                width: measures[3].width,
                left: measures[3].x,
              }}
            />
          )}
        </Tabs>
      </SectionCard>

      <SectionCard />
    </Container>
  );
}
