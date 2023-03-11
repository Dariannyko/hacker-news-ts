import { useState } from "react";
import { useParams } from "react-router-dom";
import { useStoryItem } from "../../hooks/use-story-item";
import { Comments } from "../comments";
import { flexStyles } from "../../shared/const";
import { getStories, storyUrl } from "../../shared/hacker-news-api";
import { format } from "date-fns";

import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import Avatar from "@mui/material/Avatar";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import IconButton from "@mui/material/IconButton";
import Divider from "@mui/material/Divider";
import CircularProgress from "@mui/material/CircularProgress";

const Story = () => {
  const { newsId } = useParams();
  const { story } = useStoryItem(Number(newsId));
  const [commentsIds, setCommentsIds] = useState<number[]>();
  const [loading, setLoading] = useState(false);

  const getCurrentComments = (id: number) => {
    setLoading(true);
    getStories(`${storyUrl + id}.json`).then((story) => {
      setCommentsIds(story.kids);
      setLoading(false);
    });
  };

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
            <Box sx={{ ...flexStyles }}>
              <CalendarMonthIcon />
              <Typography variant="subtitle1" component="p">
                {story.time &&
                  format(new Date(story.time * 1000), "d MMM',' yyyy")}
              </Typography>
            </Box>
          </Box>
          <Box sx={flexStyles}>
            <Avatar
              aria-label="news"
              sx={{ width: 30, height: 30, fontSize: 16 }}
            >
              {story.by && story.by[0]}
            </Avatar>
            <Typography
              variant="body2"
              component="p"
            >{`By ${story.by}`}</Typography>
          </Box>
        </Box>
        <Typography variant="h4" component="h1" sx={{ marginBottom: 8 }}>
          {story.title}
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", columnGap: 1.5 }}>
            <ChatBubbleOutlineIcon />
            <Typography
              variant="subtitle1"
              component="p"
              sx={{ fontWeight: 500, lineHeight: 1.3 }}
            >
              {story?.descendants}
            </Typography>
          </Box>
          <IconButton
            sx={{ marginBottom: 1 }}
            aria-label="reload comments"
            onClick={() => getCurrentComments(story.id)}
          >
            <RestartAltIcon />
          </IconButton>
        </Box>
        {story.descendants !== 0 && (
          <>
            <Divider />
            <Comments
              story={story}
              setCommentsIds={setCommentsIds}
              commentsIds={commentsIds}
              loading={loading}
            />
          </>
        )}
      </Box>
    </Container>
  );
};

export { Story };
