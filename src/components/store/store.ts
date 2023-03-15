import { configureStore } from "@reduxjs/toolkit";
import storyItemReducer from "./story-slice/story-slice";

export const store = configureStore({
  reducer: {
    storyItemReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
