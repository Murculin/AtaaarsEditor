import { useState, useCallback } from "react";

export const useBoolean = (initialState: boolean): [boolean, () => void] => {
  const [flag, setFlag] = useState(initialState);

  const toggle = useCallback(() => {
    setFlag((x) => !x);
  }, [flag]);

  return [flag, toggle];
};

