import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export enum Screen {
   Home = "home",
   Entries = "entries",
}

export interface NavigationState {
  currentScreen: string;
}

const initialState: NavigationState = {
  currentScreen: Screen.Home,
};

const NavigationSliceName = "navigation";

const NavigationSlice = createSlice({
  name: NavigationSliceName,
  initialState: initialState,
  reducers: {
    navigateToEntries(state: any) {
      state.currentScreen = Screen.Entries
    },
  },
});

export const NavigationReducer = NavigationSlice.reducer;
export const NavigationActions = NavigationSlice.actions;
