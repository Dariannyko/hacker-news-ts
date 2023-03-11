import { useStoryItem } from "../hooks/use-story-item";
import { Link } from "react-router-dom";
import { flexStyles } from "../shared/const";
import { format } from "date-fns";

import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import Divider from "@mui/material/Divider";
import CardContent from "@mui/material/CardContent";
import ListItem from "@mui/material/ListItem";
import Skeleton from "@mui/material/Skeleton";

interface StoryItemProps {
  storyId: number;
}

const StoryItem = ({ storyId }: StoryItemProps) => {
  const { story } = useStoryItem(storyId);

  return story?.url ? (
    <ListItem sx={{ width: "100%", paddingX: 0, paddingY: 0, marginBottom: 5 }}>
      <Card
        sx={{ paddingX: 2, display: "block", width: "100%", borderRadius: 1.5 }}
      >
        <Link to={`/news/${storyId}`} className="link">
          <CardContent sx={{ display: "flex", padding: 2.5 }}>
            <Box sx={{ ...flexStyles, marginLeft: "auto" }}>
              <CalendarMonthIcon />
              <Typography variant="subtitle1" component="p">
                {format(new Date(story.time * 1000), "d MMM',' yyyy")}
              </Typography>
            </Box>
          </CardContent>
          <CardHeader
            title={story.title}
            sx={{ paddingBottom: 4, paddingTop: 3 }}
          ></CardHeader>
          <CardContent sx={{ display: "flex", paddingBottom: 5 }}>
            <Box sx={flexStyles}>
              <Avatar
                aria-label="news"
                sx={{ width: 30, height: 30, fontSize: 16 }}
              >
                {story.by[0]}
              </Avatar>
              <Typography
                variant="subtitle1"
                component="p"
              >{`By ${story.by}`}</Typography>
            </Box>
            <Divider orientation="vertical" flexItem sx={{ marginX: 4 }} />
            <Box sx={flexStyles}>
              <ThumbUpIcon />
              <Typography variant="subtitle1" component="p">
                {story.score}
              </Typography>
            </Box>
          </CardContent>
        </Link>
      </Card>
    </ListItem>
  ) : null;
};

export { StoryItem, flexStyles };
export type { StoryItemProps };
