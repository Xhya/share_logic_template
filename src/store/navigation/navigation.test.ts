import { ReduxStore, RootState, createStore } from "../store.config";
import { navigateToEntriesAction } from "./navigation.action";
import { Screen } from "./navigation.reducer";

describe("todolist tests", () => {
  let store: ReduxStore;
  let initialState: RootState;

  beforeEach(() => {
    store = createStore({});
    initialState = store.getState();
  });

  it("should add item", async () => {
    expect(store.getState().navigation.currentScreen).toEqual(Screen.Home);
    await store.dispatch(navigateToEntriesAction());
    expect(store.getState().navigation.currentScreen).toEqual(Screen.Entries);
  });
});
