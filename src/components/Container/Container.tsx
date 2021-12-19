import Gitbutton from "./Gitbutton";
import logoImg from "../../assets/logo.svg";
import { useCallback } from "react";
import { StyledContainer, Header, Logo, Playground, Footer } from "./Style";
import Avatar from "../Avatar/Avatar.jsx";
import styled from "styled-components";
import { useAppSelector, useAppDispatch } from '../../store/store'

const StyledAvatar = styled(Avatar)`
  margin-top: 24px;
`;

const Container = () => {
  const avatarInfo = useAppSelector(state => state.avatarInfo.now)  

  const clickGitbutton = useCallback(() => {
    window.location.href = "https://github.com/murculin";
  }, []);

  return (
    <StyledContainer>
      <Header>
        <Logo>
          <div className="img_wrapper">
            <img src={logoImg} alt="logo" />
          </div>
          <span>AvataaarsEditor</span>
        </Logo>
        <Gitbutton onClick={clickGitbutton}></Gitbutton>
      </Header>
      <Playground>
        <StyledAvatar
          style={{ width: "240px", height: "240px" }}
          {...avatarInfo}
        ></StyledAvatar>
      </Playground>
      <Footer>Made by Murculin</Footer>
    </StyledContainer>
  );
};

export default Container;
