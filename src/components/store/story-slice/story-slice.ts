import { createSlice } from "@reduxjs/toolkit";
import { StoryType } from "../../../shared/types";
import { StoryState } from "./types";

const initialState: StoryState = {
  currentStory: {} as StoryType,
};

const storySlice = createSlice({
  name: "story",
  initialState,
  reducers: {
    addStory(state, action) {
      state.currentStory = action.payload;
    },
  },
});

export const { addStory } = storySlice.actions;
export default storySlice.reducer;
