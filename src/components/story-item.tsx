import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { flexStyles } from "../shared/const";
import { StoryDate } from "./story-date";
import { StoryType } from "../shared/types";
import { getStories, storyUrl } from "../shared/hacker-news-api";
import { addStory } from "./store/story-slice/story-slice";
import { StoryAuthor } from "./story-author";
import { StoryRating } from "./story-rating";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Divider from "@mui/material/Divider";
import CardContent from "@mui/material/CardContent";
import ListItem from "@mui/material/ListItem";

interface StoryItemProps {
  storyId: number;
}

const StoryItem = ({ storyId }: StoryItemProps) => {
  const dispatch = useDispatch();
  const [story, setStory] = useState<StoryType>();

  useEffect(() => {
    getStories(`${storyUrl + storyId}`).then(
      (story) => story.url && setStory(story)
    );
  }, []);

  const setCurrentStory = () => {
    dispatch(addStory(story));
  };

  return story?.url ? (
    <ListItem sx={{ width: "100%", paddingX: 0, paddingY: 0, marginBottom: 5 }}>
      <Card
        sx={{ paddingX: 2, display: "block", width: "100%", borderRadius: 1.5 }}
      >
        <Link
          to={`/news/${storyId}`}
          className="link"
          onClick={setCurrentStory}
        >
          <CardContent sx={{ display: "flex", padding: 2.5 }}>
            <StoryDate story={story} marginLeft={"auto"} />
          </CardContent>
          <CardHeader
            title={story.title}
            sx={{ paddingBottom: 4, paddingTop: 3 }}
          ></CardHeader>
          <CardContent sx={{ display: "flex", paddingBottom: 5 }}>
            <StoryAuthor story={story} />
            <Divider orientation="vertical" flexItem sx={{ marginX: 4 }} />
            <StoryRating story={story} />
          </CardContent>
        </Link>
      </Card>
    </ListItem>
  ) : null;
};

export { StoryItem, flexStyles };
export type { StoryItemProps };
