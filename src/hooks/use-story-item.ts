import { useEffect, useState } from "react";
import { getStories, storyUrl } from "../shared/hacker-news-api";
import { StoryType } from "../shared/types";

const useStoryItem = (id: number) => {
  const [story, setStory] = useState<StoryType>();

  useEffect(() => {
    getStories(`${storyUrl + id}.json`).then(
      (story) => story.url && setStory(story)
    );
  }, []);

  return { story };
};

export { useStoryItem };
