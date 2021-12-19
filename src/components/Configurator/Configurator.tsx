import styled from "styled-components";
import AsideButton from "./AsideButton/AsideButton";
import Section from "./Section/Section";
import { useBoolean } from "../../hooks/index";
import { useAppSelector, useAppDispatch } from "../../store/store";
import options from "../../options";

const Aside = styled.aside<{ fold: boolean }>`
  position: relative;
  width: ${(props) => (props.fold ? "0px" : "320px")};
  z-index: 200;
  min-height: 100vh;
  transition: width 0.2s;
  background-color: #14161a;
  color: #a4b2c1;
  .container {
    width: 100%;
    height: 100vh;
    overflow: scroll;
  }
`;

const SectionList = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
`;

export default function Configurator() {
  const avatarInfo = useAppSelector((state) => state.avatarInfo.now);
  const [fold, toggleFold] = useBoolean(false);

  useAppSelector;

  return (
    <Aside fold={fold}>
      <AsideButton fold={fold} toggleFold={toggleFold}></AsideButton>
      <div className="container">
        <SectionList>
          {options.map((item) => (
            <Section key={item.type} {...item}></Section>
          ))}
        </SectionList>
      </div>
    </Aside>
  );
}
