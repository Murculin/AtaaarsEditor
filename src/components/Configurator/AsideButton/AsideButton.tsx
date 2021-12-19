import styled, { css } from "styled-components";
import { FC } from "react";

interface StyledButtonProps {
  readonly fold: boolean;
}

interface AsideButtonProps extends StyledButtonProps {
  toggleFold: Function;
}

const StyledAsideButton = styled("div")<StyledButtonProps>`
  position: absolute;
  top: 50%;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 26px;
  height: 64px;
  background-color: #1e2229;
  border-radius: 0.4rem 0 0 0.4rem;
  transform: translate(-100%, -50%);
  cursor: pointer;
  transition: width 0.2s, background-color 0.2s;
  font-weight: bolder;

  span {
    ${(props) =>
      props.fold &&
      css`
        transform: rotateY(180deg);
        transform-origin: center;
      `}
  }

  &:hover {
    width: 24px;
    background-color: #23282f;
  }
`;

const AsideButton: FC<AsideButtonProps> = (props) => {
  return (
    <StyledAsideButton fold={props.fold} onClick={() => props.toggleFold()}>
      <span>&gt;</span>
    </StyledAsideButton>
  );
};

export default AsideButton;
