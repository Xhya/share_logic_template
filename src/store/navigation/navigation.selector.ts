import { RootState } from "../store.config";

export const selectCurrentScreen = (state: RootState) => state.navigation.currentScreen;

