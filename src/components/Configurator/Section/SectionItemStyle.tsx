import { FC } from "react";
import styled, { css } from "styled-components";

interface SectionItemProps {
  value: string;
  isSelect: boolean;
}

const SectionItem = styled.li<SectionItemProps>`
  width: 40px;
  height: 40px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  .inner {
    width: 24px;
    height: 24px;
    background-color: #a4b2c1;
    background-color: ${(props) => (props.isSelect ? "#6967fe" : "#a4b2c1")};
    transition: background-color 0.2s;
    ${(props) =>
      props.value === "Circle" &&
      css`
        border-radius: 50%;
      `}
  }
`;

const SectionItemStyle: FC<SectionItemProps> = ({
  value = "Circle",
  isSelect = false,
}) => {
  return (
    <SectionItem value={value} isSelect={isSelect}>
      <div className="inner"></div>
    </SectionItem>
  );
};

export default SectionItemStyle;
