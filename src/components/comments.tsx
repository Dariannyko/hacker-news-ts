import { useEffect } from "react";
import { CommentItem } from "./comment-item";
import { StoryType } from "../shared/types";

import Box from "@mui/material/Box";

interface CommentsProps {
  story: StoryType;
  setCommentsIds: (value: number[]) => void;
  commentsIds: number[] | undefined;
}

const Comments = ({ story, setCommentsIds, commentsIds }: CommentsProps) => {
  useEffect(() => {
    if (story.kids) setCommentsIds(story.kids);
  }, []);

  return (
    <>
      <Box sx={{ marginBottom: 6 }}>
        {commentsIds?.map((id) => (
          <CommentItem commentId={id} key={id} />
        ))}
      </Box>
    </>
  );
};
export { Comments };
export type { CommentsProps };
