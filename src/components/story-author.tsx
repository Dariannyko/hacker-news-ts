import { flexStyles } from "./story-item";
import { StoryType } from "../shared/types";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

interface StoryAuthorProps {
  story: StoryType;
}

const StoryAuthor = ({ story }: StoryAuthorProps) => {
  return (
    <Box sx={flexStyles}>
      <Avatar aria-label="news" sx={{ width: 30, height: 30, fontSize: 16 }}>
        {story.by[0]}
      </Avatar>
      <Typography
        variant="subtitle1"
        component="p"
      >{`By ${story.by}`}</Typography>
    </Box>
  );
};

export { StoryAuthor };
export type { StoryAuthorProps };
