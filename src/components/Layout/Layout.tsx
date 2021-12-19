import styled from "styled-components";
import Configurator from "../Configurator/Configurator";
import Container from '../Container/Container.jsx'

const Page = styled.main`
  position: relative;
  background-color: #282c34;
  height: 100vh;
  min-height: 600px;
  overflow: hidden;
  width: 100vw;
  display: flex;
  color: #fff;
  font-family: Rubik,Fallback;
`;

export default function Layout() {
  return (
    <Page>
      <Container></Container>
      <Configurator></Configurator>
    </Page>
  );
}
