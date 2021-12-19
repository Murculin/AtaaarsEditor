import githubImg from "../../assets/github.svg";
import { FC } from "react";

import { StyledGitbutton } from "./Style";

interface GitbuttonProps {
  onClick: () => void;
}

const Gitbutton: FC<GitbuttonProps> = (props) => {
  return (
    <StyledGitbutton onClick={() => props.onClick()}>
      <img src={githubImg}></img>
      <span>GitHub</span>
    </StyledGitbutton>
  );
};

export default Gitbutton;
