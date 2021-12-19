import { useMemo } from "react";
import { useAppSelector, useAppDispatch } from "../store/store";

interface SectionProps {
  label: string;
  type: string;
  attribute: "avatarStyle" | "topType";
  values: string[];
  colorAttribute?: string | undefined;
  colors?: Record<string, string | undefined>;
}

export const useSelected = (props: SectionProps, value: string) => {
  const avatarInfo: any = useAppSelector((state) => state.avatarInfo.now);
  const dispatch = useAppDispatch();

  const isSelected = useMemo(
    () => avatarInfo[props.attribute] === value,
    [value, avatarInfo]
  );

  const select = (target?: string) => {
    target = target === "undefined" ? value : target;
    // TODO dispatch
  };

  return {
    isSelected,
    select,
  };
};
