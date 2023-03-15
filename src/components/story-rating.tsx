import { StoryType } from "../shared/types";
import { flexStyles } from "./story-item";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";

interface StoryRatingProps {
  story: StoryType;
}

const StoryRating = ({ story }: StoryRatingProps) => {
  return (
    <Box sx={flexStyles}>
      <ThumbUpIcon />
      <Typography variant="subtitle1" component="p">
        {story.score}
      </Typography>
    </Box>
  );
};

export { StoryRating };
export type { StoryRatingProps };
