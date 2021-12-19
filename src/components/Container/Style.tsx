import styled from "styled-components";

export const StyledContainer = styled.section`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  height: 48px;
  padding: 10px 32px;
  justify-content: space-between;
  color: #a4b2c1;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  .img_wrapper {
    width: 40px;
    height: 40px;
    background-color: #fff;
    border-radius: 12px;
    overflow: hidden;
    img {
      width: 40px;
      height: 40px;
    }
  }

  span {
    margin-left: 16px;
    font-weight: bold;
    font-size: 30px;
    cursor: default;
  }
`;

export const Playground = styled.div`
  flex:1;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  padding: 10px 0;
  color: #a4b2c166;
  font-weight: bold;
  font-size: 12px;
`;

export const StyledGitbutton = styled.button`
  padding: 0;
  font-family: inherit;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 128px;
  height: 40px;
  color: #a4b2c1;
  font-weight: bold;
  font-size: 16px;
  background-color: #1f2329;
  border-radius: 5px;
  cursor: pointer;
  transition: box-shadow 0.2s, background-color 0.2s;
  user-select: none;
  img {
    width: 24px;
    height: 24px;
    margin-right: 4px;
  }
  &:hover {
    background-color: #23282f;
    box-shadow: 0 0.2rem 1.5rem 0.2rem #2a2f37;
  }
`;