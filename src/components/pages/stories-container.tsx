import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { StoryItem } from "../story-item";
import {
  defaultTime,
  MAX_STORIES,
  STORIES_INCREMENT,
  updateTime,
} from "../../shared/const";
import { OutletContext } from "../../shared/types";
import { getStories, newStoriesUrl } from "../../shared/hacker-news-api";

import List from "@mui/material/List";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import Button from "@mui/material/Button";

const StoriesContainer = () => {
  const [count, setCount] = useState(STORIES_INCREMENT);
  const [updateInterval, setUpdateInterval] = useState(defaultTime);
  const { storiesIds, setStoriesIds, downloadStories }: OutletContext = useOutletContext();

  const loadMore = () => {
    if (count < MAX_STORIES) {
      setCount(count + STORIES_INCREMENT);
    }
    return;
  };

  useEffect(() => {
    const intervalCall = setInterval(() => {
      getStories(newStoriesUrl)
        .then((storiesIds) => {
          setStoriesIds(storiesIds);
        })
        .then(() => {
          setUpdateInterval(updateTime);
        });
    }, updateInterval);

    return () => {
      clearInterval(intervalCall);
    };
  }, [updateInterval]);

  if (!storiesIds.length)
    return (
      <Box sx={{ display: "flex", justifyContent: "center", marginTop: 10 }}>
        <CircularProgress />
      </Box>
    );

  return (
    <Box sx={{ marginBottom: 4 }}>
      <List>
        {storiesIds.slice(0, count).map((id) => (
          <StoryItem storyId={id} key={id} />
        ))}
      </List>
      {storiesIds.length !== 0 && (
        <Button variant="text" onClick={loadMore}>
          See more
        </Button>
      )}
    </Box>
  );
};

export { StoriesContainer };
