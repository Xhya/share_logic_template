import { Action, Store } from "redux";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";
import { NavigationReducer, NavigationState } from "./navigation/navigation.reducer";

export const createStore = (dependencies: Dependencies) =>
  configureStore({
    reducer: { 
      navigation: NavigationReducer,
     },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: {
          extraArgument: {},
        },
      }),
  });

export const store = createStore({});

export interface Dependencies {}

export type ReduxStore = Store<RootState> & {
  dispatch: ThunkDispatch<RootState, Dependencies, Action>;
};

export interface RootState {
  navigation: NavigationState;
}

export type AppDispatch = typeof store.dispatch;
export type ThunkResult<R> = ThunkAction<R, RootState, Dependencies, Action>;
