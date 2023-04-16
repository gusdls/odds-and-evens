import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/store";

export type OddOrEven = "odd" | "even";

interface GambleState {
  betAmount: number;
  point: number;
  userChoice: OddOrEven;
  success: boolean;
  resultShown: boolean;
  lastChange: string;
}

const initialState: GambleState = {
  betAmount: 0,
  point: 500000,
  userChoice: "odd",
  success: false,
  resultShown: false,
  lastChange: "",
};

const gambleSlice = createSlice({
  name: "gamble",
  initialState,
  reducers: {
    addBetAmount: (state, action: PayloadAction<number>) => {
      state.betAmount += action.payload;
      if (state.betAmount > state.point) {
        state.betAmount = state.point;
      }
    },
    removeBetAmount: (state, action: PayloadAction<number>) => {
      state.betAmount -= action.payload;
      if (state.betAmount < 0) {
        state.betAmount = 0;
      }
    },
    setBetAmount: (state, action: PayloadAction<number>) => {
      state.betAmount = action.payload;
      if (state.betAmount > state.point) {
        state.betAmount = state.point;
      } else if (state.betAmount < 0) {
        state.betAmount = 0;
      }
    },
    choose: (state, action: PayloadAction<OddOrEven>) => {
      state.userChoice = action.payload;
    },
    go: (state) => {
      if (state.betAmount <= 0 || state.betAmount > state.point) {
        return state;
      }
      if (Math.random() <= 0.5) {
        state.success = true;
        state.lastChange = `+${state.betAmount}`;
        state.point += state.betAmount;
      } else {
        state.success = false;
        state.lastChange = `-${state.betAmount}`;
        state.point -= state.betAmount;
      }
      state.resultShown = true;
    },
    hide: (state) => {
      state.resultShown = false;
    },
  },
});

export default gambleSlice.reducer;

export const selectChoice = (state: RootState) => state.gamble.userChoice;
export const selectSuccess = (state: RootState) => state.gamble.success;
export const selectPoint = (state: RootState) => state.gamble.point;
export const selectBetAmount = (state: RootState) => state.gamble.betAmount;
export const selectResultShown = (state: RootState) => state.gamble.resultShown;
export const selectLastChange = (state: RootState) => state.gamble.lastChange;

export const { addBetAmount, removeBetAmount, setBetAmount, choose, go, hide } =
  gambleSlice.actions;
