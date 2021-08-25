import React from 'react';

import { ScrollView } from 'react-native';
import {
  Container,
  CoverImage,
  SectionCard,
  ProfileContainer,
  UserInfoContainer,
  UserAvatarContainer,
  UserAvatar,
  UserName,
  Footer,
  MemberPeriodText,
  Content,
} from './styles';

import { IconButton } from '../../components/IconButton';
import { NavBar } from './components/NavBar';
import { UserReferences } from './components/UserReferences';
import { Techs } from './components/Techs';
import { AboutMe } from './components/AboutMe';

const techs = [
  {
    id: 'react-native',
    url: 'https://xesque.rocketseat.dev/platform/tech/react-native.svg',
  },
  {
    id: 'node',
    url: 'https://xesque.rocketseat.dev/platform/tech/node.svg',
  },
  {
    id: 'javascript',
    url: 'https://xesque.rocketseat.dev/platform/tech/javascript.svg',
  },
  {
    id: 'hmtl',
    url: 'https://xesque.rocketseat.dev/platform/tech/html5.svg',
  },
  {
    id: 'css',
    url: 'https://xesque.rocketseat.dev/platform/tech/css3.svg',
  },
];

export function Profile(): JSX.Element {
  return (
    <Container>
      <NavBar />
      <ScrollView showsVerticalScrollIndicator={false}>
        <CoverImage
          source={{
            uri: 'https://res.cloudinary.com/do6cbpp3c/image/upload/v1629853868/profile-89559894-c39b-4baa-b68d-a8ff09d192b7_llvhzj.jpg',
          }}
        />
        <SectionCard>
          <Content>
            <ProfileContainer>
              <UserInfoContainer>
                <UserAvatarContainer>
                  <UserAvatar
                    source={{ uri: 'https://github.com/rennand.png' }}
                  />
                </UserAvatarContainer>
                <UserName>Rennan{'\n'}Douglas Oliveira</UserName>
              </UserInfoContainer>

              <IconButton icon="edit" />
            </ProfileContainer>

            <UserReferences />
            <Techs techs={techs} />
          </Content>

          <Footer>
            <MemberPeriodText>MEMBRO DESDE: AGOSTO, 2019</MemberPeriodText>
          </Footer>
        </SectionCard>

        <SectionCard>
          <AboutMe />
        </SectionCard>
      </ScrollView>
    </Container>
  );
}
