import { FC, useCallback } from "react";
import styled from "styled-components";
import SectionItemStyle from "./SectionItemStyle";

interface SectionProps {
  label: string;
  type: string;
  attribute: string;
  values: string[];
  colorAttribute?: string | undefined;
  colors?: Record<string, string | undefined>;
}

const StyledSection = styled.li`
  padding: 24px 16px;
  h3 {
    margin-bottom: 12px;
    font-weight: bold;
  }
  ul {
    display: flex;
    flex-wrap: wrap;
  }
`;

const Section: FC<SectionProps> = ({ values, type, label }) => {
  const renderSectionItems = useCallback(() => {
    return values.map((item) =>
      type === "avatarStyle" ? (
        <SectionItemStyle value={item} isSelect={true}></SectionItemStyle>
      ) : (
        <li></li>
      )
    );
  }, [values, type]);
  return (
    <StyledSection>
      <h3>{label}</h3>
      <ul>{renderSectionItems()}</ul>
    </StyledSection>
  );
};

export default Section;
