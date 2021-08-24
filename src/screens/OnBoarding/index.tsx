import React, { useRef, useState } from 'react';
import { FlatList, ViewToken } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import {
  Container,
  PageContainer,
  HeroImage,
  Title,
  Subtitle,
  Content,
  BulletsContainer,
} from './styles';

import AstronautImage from '../../assets/images/astronaut.png';
import ConnectImage from '../../assets/images/connect.png';
import LessonsImage from '../../assets/images/lessons.png';
import { Bullet } from '../../components/Bullet';
import { Button } from '../../components/Button';

type ChangeImageProps = {
  viewableItems: ViewToken[];
  changed: ViewToken[];
};

type NavigationProps = {
  navigate: (screen: string) => void;
};

const pages = [
  {
    id: '1',
    image: AstronautImage,
    title: 'Olá,\ntripulante',
    subtitle: 'Nossas boas-vindas a\nVersão Beta 1.0',
  },
  {
    id: '2',
    image: ConnectImage,
    title: 'O mobile,\nestá em evolução',
    subtitle:
      'Nessa versão você pode expandir sua rede,\nver suas conexões, controlar seu perfil, seus\ndados e ver notificações',
  },
  {
    id: '3',
    image: LessonsImage,
    title: 'Aulas e novos\nrecursos em breve',
    subtitle:
      'O acesso às suas aulas e outras melhorias\nvirão com a evolução do mobile. Tudo pra\nvocê ter a melhor experiência',
  },
];

export function OnBoarding(): JSX.Element {
  const navigation = useNavigation<NavigationProps>();

  const [activePageIndex, setActivePageIndex] = useState(0);

  const pageIndexChange = useRef((info: ChangeImageProps) => {
    setActivePageIndex(info.viewableItems[0].index!);
  });

  const flatListRef = useRef<FlatList>(null);

  function handleNextBoard() {
    if (activePageIndex !== pages.length - 1) {
      flatListRef.current?.scrollToIndex({
        animated: true,
        index: activePageIndex + 1,
      });

      return;
    }

    navigation.navigate('Login');
  }

  return (
    <Container>
      <FlatList
        ref={flatListRef}
        data={pages}
        keyExtractor={page => page.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        onViewableItemsChanged={pageIndexChange.current}
        renderItem={({ item }) => (
          <PageContainer>
            <HeroImage source={item.image} />
            <Title>{item.title}</Title>
            <Subtitle>{item.subtitle}</Subtitle>
          </PageContainer>
        )}
      />

      <Content>
        <BulletsContainer>
          {pages.map((_, index) => (
            <Bullet key={String(index)} selected={index === activePageIndex} />
          ))}
        </BulletsContainer>
        <Button
          title={activePageIndex === pages.length - 1 ? 'Começar' : 'Avançar'}
          color={activePageIndex === pages.length - 1 ? 'purple' : 'shape'}
          onPress={handleNextBoard}
        />
      </Content>
    </Container>
  );
}
