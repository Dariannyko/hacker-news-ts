export interface StoryType {
  by: string;
  descendants: number;
  kids?: number[];
  id: number;
  score: number;
  time: number;
  title: string;
  type: string;
  url: string;
}

export interface OutletContext {
  loading: boolean;
  storiesIds: number[];
  setStoriesIds: (value: number[]) => void;
  downloadStories: () => void;
}

export interface CommentType {
  by: string;
  id: number;
  kids?: number[];
  parent: number;
  text: string;
  time: number;
  type: string;
}
