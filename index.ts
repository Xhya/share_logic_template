import { navigateToEntriesAction } from "./src/store/navigation/navigation.action";
import { selectCurrentScreen } from "./src/store/navigation/navigation.selector";
import { store } from "./src/store/store.config";

export const Store = store

export const State = {
  navigation: {
    selectCurrentScreen: selectCurrentScreen,
  },
};

export const Action = {
  navigateToEntries: navigateToEntriesAction,
};
