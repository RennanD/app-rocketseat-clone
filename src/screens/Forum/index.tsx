import { NavBar } from '../../components/NavBar';
import { TextInput } from '../../components/TextInput';

import { Container, SectionCard } from './styles';

export function Forum(): JSX.Element {
  return (
    <Container>
      <NavBar />
      <SectionCard>
        <TextInput icon="search" placeholder="Digite um termo para buscar" />
        <TextInput icon="search" placeholder="Tags" />
      </SectionCard>

      <SectionCard />
    </Container>
  );
}
