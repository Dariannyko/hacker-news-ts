import { useEffect } from "react";
import { CommentItem } from "./comment-item";
import { StoryType } from "../shared/types";

import LinearProgress from "@mui/material/LinearProgress";
import Box from "@mui/material/Box";

interface CommentsProps {
  story: StoryType;
  setCommentsIds: (value: number[]) => void;
  commentsIds: number[] | undefined;
  loading: boolean;
}

const Comments = ({
  story,
  setCommentsIds,
  commentsIds,
  loading,
}: CommentsProps) => {
  useEffect(() => {
    if (story.kids) setCommentsIds(story.kids);
  }, []);

  return (
    <>
      <Box sx={{ marginBottom: 6 }}>
        {loading ? (
          <Box sx={{ width: "100%" }}>
            <LinearProgress />
          </Box>
        ) : (
          commentsIds?.map((id) => <CommentItem commentId={id} key={id} />)
        )}
      </Box>
    </>
  );
};
export { Comments };
export type { CommentsProps };
