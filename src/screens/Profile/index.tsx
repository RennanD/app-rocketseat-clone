import { AntDesign, Feather } from '@expo/vector-icons';
import React from 'react';

import { useTheme } from 'styled-components';

import { SvgFromUri } from 'react-native-svg';

import {
  Container,
  Header,
  ActionsContainer,
  CoverImage,
  SectionCard,
  ProfileContainer,
  UserInfoContainer,
  UserAvatarContainer,
  UserAvatar,
  UserName,
  UserReferencesContainer,
  NickName,
  WorkInformation,
  Office,
  CompanyName,
  PlaceUser,
  PlaceUserText,
  TechsContainer,
  Footer,
  MemberPeriodText,
  Content,
} from './styles';

import BurguerMenu from '../../assets/icons/burguer-menu.svg';
import { IconButton } from '../../components/IconButton';

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
  const theme = useTheme();

  return (
    <Container>
      <Header>
        <IconButton icon={{ svg: <BurguerMenu /> }} />

        <ActionsContainer>
          <IconButton icon="search" style={{ marginRight: 20 }} />

          <IconButton
            icon={{
              svg: (
                <AntDesign
                  name="adduser"
                  size={24}
                  color={theme.colors.text}
                  style={{ marginRight: 20 }}
                />
              ),
            }}
          />
          <IconButton icon="bell" />
        </ActionsContainer>
      </Header>
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

          <UserReferencesContainer>
            <NickName>@rennan-oliveira</NickName>
            <WorkInformation>
              <Office>Mobile Engineer | </Office>

              <CompanyName>Rocketseat</CompanyName>
            </WorkInformation>

            <PlaceUser>
              <Feather
                name="map-pin"
                size={16}
                color={theme.colors.text}
                style={{ marginRight: 6 }}
              />
              <PlaceUserText>Teresina, PI, Brasil</PlaceUserText>
            </PlaceUser>
          </UserReferencesContainer>

          <TechsContainer>
            {techs.map(tech => (
              <IconButton
                key={tech.id}
                icon={{
                  svg: (
                    <SvgFromUri
                      uri={tech.url}
                      height={48}
                      width={48}
                      style={{ marginRight: 10 }}
                    />
                  ),
                }}
              />
            ))}
          </TechsContainer>
        </Content>

        <Footer>
          <MemberPeriodText>MEMBRO DESDE: AGOSTO, 2019</MemberPeriodText>
        </Footer>
      </SectionCard>
    </Container>
  );
}
