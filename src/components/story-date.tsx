import { flexStyles } from "./story-item";
import { format } from "date-fns";
import { StoryType } from "../shared/types";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

interface StoryDateProps {
  story: StoryType;
  marginLeft: string;
}

const StoryDate = ({ story, marginLeft }: StoryDateProps) => {
  return (
    <Box sx={{ ...flexStyles, marginLeft: marginLeft }}>
      <CalendarMonthIcon />
      <Typography variant="subtitle1" component="p">
        {format(new Date(story.time * 1000), "d MMM',' yyyy")}
      </Typography>
    </Box>
  );
};

export { StoryDate };
export type { StoryDateProps };
