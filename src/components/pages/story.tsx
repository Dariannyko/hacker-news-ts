import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { RootState } from "../store/store";
import { addStory } from "../store/story-slice/story-slice";
import { getStories, storyUrl } from "../../shared/hacker-news-api";
import { Comments } from "../comments";
import { StoryDate } from "../story-date";
import { StoryAuthor } from "../story-author";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";

const Story = () => {
  const { newsId } = useParams();
  const dispatch = useDispatch();
  const story = useSelector(
    (state: RootState) => state.storyItemReducer.currentStory
  );
  const [commentsQuantity, setCommentsQuantity] = useState(story?.descendants);
  const [commentsIds, setCommentsIds] = useState<number[]>();

  useEffect(() => {
    if (story.url) {
      setCommentsIds(story.kids);
      return;
    }

    if (!story.url) {
      getStories(`${storyUrl + newsId}`).then((story) => {
        story.url && dispatch(addStory(story));
        setCommentsIds(story.kids);
        setCommentsQuantity(story?.descendants);
      });
    }
  }, []);

  if (!story?.by)
    return (
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: 10,
        }}
      >
        <CircularProgress />
      </Box>
    );

  return (
    <Container>
      <Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: 6,
          }}
        >
          <Box>
            <Link href={story.url} underline="hover">
              <Typography
                variant="body2"
                component="p"
                sx={{ marginBottom: 1.5 }}
              >
                See news
              </Typography>
            </Link>
            <StoryDate story={story} marginLeft={""} />
          </Box>
          <StoryAuthor story={story} />
        </Box>
        <Typography variant="h4" component="h1" sx={{ marginBottom: 8 }}>
          {story.title}
        </Typography>
        <Comments
          newsId={newsId}
          setCommentsIds={setCommentsIds}
          commentsIds={commentsIds}
          setCommentsQuantity={setCommentsQuantity}
          commentsQuantity={commentsQuantity}
        />
      </Box>
    </Container>
  );
};

export { Story };
