import { useState } from "react";
import { CommentItem } from "./comment-item";
import { CommentsQuantity } from "./comments-quantity";
import { ButtonUpdate } from "./button-update";
import { getStories, storyUrl } from "../shared/hacker-news-api";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import LinearProgress from "@mui/material/LinearProgress";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";

interface CommentsProps {
  newsId: string | undefined;
  setCommentsIds: (value: number[] | undefined) => void;
  commentsIds: number[] | undefined;
  setCommentsQuantity: (value: number) => void;
  commentsQuantity: number;
}

const Comments = ({
  newsId,
  setCommentsIds,
  commentsIds,
  setCommentsQuantity,
  commentsQuantity,
}: CommentsProps) => {
  const [loading, setLoading] = useState(false);

  const getCurrentComments = () => {
    setLoading(true);
    getStories(`${storyUrl + newsId}`).then((story) => {
      setCommentsIds(story.kids);
      setCommentsQuantity(story?.descendants);
      setLoading(false);
    });
  };

  console.log(commentsIds);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: 1.2,
        }}
      >
        <CommentsQuantity commentsQuantity={commentsQuantity} />
        <ButtonUpdate
          getUpdate={getCurrentComments}
          buttonSize={40}
          buttonColor={undefined}
          iconType={<RestartAltIcon />}
        />
      </Box>
      {loading ? (
        <Box sx={{ width: "100%" }}>
          <LinearProgress />
        </Box>
      ) : (
        commentsQuantity !== 0 && (
          <>
            <Divider />
            <Box sx={{ marginBottom: 8 }}>
              {commentsIds?.map((id) => (
                <CommentItem commentId={id} key={id} />
              ))}
            </Box>
          </>
        )
      )}
    </>
  );
};
export { Comments };
export type { CommentsProps };
