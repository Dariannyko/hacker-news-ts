import { useEffect, useState } from "react";
import { getStories, storyUrl } from "../shared/hacker-news-api";
import { CommentType } from "../shared/types";
import { format } from "date-fns";

import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SubdirectoryArrowRightIcon from "@mui/icons-material/SubdirectoryArrowRight";
import Button from "@mui/material/Button";

interface CommentItemProps {
  commentId: number;
}

const CommentItem = ({ commentId }: CommentItemProps) => {
  const [comment, setComment] = useState<CommentType>();
  const [isReplies, setIsReplies] = useState(false);

  useEffect(() => {
    getStories(`${storyUrl + commentId}.json`).then((storiesIds) => {
      setComment(storiesIds);
    });
  }, []);

  function createMarkup(markup: string) {
    return { __html: `${markup}` };
  }

  if (!comment?.text || comment?.text === "[dead]") {
    return null;
  }

  return (
    <Box sx={{ display: "flex", columnGap: 1.5, marginTop: 3 }}>
      <Avatar aria-label="news">{comment.by && comment.by[0]}</Avatar>
      <Box>
        <Box
          sx={{
            marginBottom: 0.8,
            display: "flex",
            alignItems: "center",
            columnGap: 2,
          }}
        >
          <Typography
            variant="subtitle1"
            component="p"
            sx={{ color: "#1976d2", fontWeight: 600 }}
          >
            {comment.by}
          </Typography>
          <Typography variant="body2" component="p" sx={{ color: "#818c99" }}>
            {comment.time &&
              format(new Date(comment.time * 1000), "d MMM',' yyyy")}
          </Typography>
        </Box>
        <Typography
          variant="body2"
          component="p"
          sx={{ marginBottom: 1.5 }}
          dangerouslySetInnerHTML={createMarkup(comment.text)}
        />
        {comment.kids && (
          <div
            onClick={() => {
              setIsReplies(true);
            }}
          >
            {isReplies ? (
              comment.kids.map((id) => <CommentItem commentId={id} key={id} />)
            ) : (
              <Button
                startIcon={<SubdirectoryArrowRightIcon sx={{ fontSize: 20 }} />}
              >
                <Typography
                  variant="body2"
                  component="p"
                  sx={{ fontWeight: 500 }}
                >
                  {comment.kids.length} replies
                </Typography>
              </Button>
            )}
          </div>
        )}
      </Box>
    </Box>
  );
};

export { CommentItem };
export type { CommentItemProps };
