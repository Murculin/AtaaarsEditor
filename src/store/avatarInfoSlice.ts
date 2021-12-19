import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";

interface AvatarInfo {
  avatarStyle: string;
  topType: string;
  accessoriesType: string;
  hairColor: string;
  facialHairType: string;
  clotheType: string;
  clotheColor: string;
  eyeType: string;
  eyebrowType: string;
  mouthType: string;
  skinColor: string;
}

type SingleState = AvatarInfo | undefined;

interface State {
  past: SingleState[];
  now: SingleState;
  future: SingleState[];
}


const defultState = {
  avatarStyle: "Circle",
  topType: "NoHair",
  accessoriesType: "Prescription02",
  hairColor: "BrownDark",
  facialHairType: "Blank",
  clotheType: "Hoodie",
  clotheColor: "PastelBlue",
  eyeType: "Happy",
  eyebrowType: "Default",
  mouthType: "Smile",
  skinColor: "Light",
};

export const initialState: State = {
  past: [],
  now: defultState,
  future: [],
};

export const AvatarSlice = createSlice({
  name: "avatarInfo",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<SingleState>) => {
      state.past = [...state.past, state.now];
      state.now = action.payload;
      state.future = [];
    },
    set: (state, actions: PayloadAction) => {},
    undo: (state) => {
      state.future.push(state.now);
      let last = state.past.pop();
      state.now = last;
    },
    redo: (state) => {
      let first = state.future.shift();
      state.past.push(state.now);
      state.now = first;
    },
  },
});

export const { add, undo, redo } = AvatarSlice.actions;
export const getNowState = (state: RootState) => state;

export default AvatarSlice.reducer;
