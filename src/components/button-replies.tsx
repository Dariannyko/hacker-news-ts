import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import SubdirectoryArrowRightIcon from "@mui/icons-material/SubdirectoryArrowRight";
import { CommentType } from "../shared/types";

type ButtonRepliesProps = {
  comment: CommentType;
};

const ButtonReplies = ({ comment }: ButtonRepliesProps) => {
  return (
    <Button startIcon={<SubdirectoryArrowRightIcon sx={{ fontSize: 20 }} />}>
      <Typography variant="body2" component="p" sx={{ fontWeight: 500 }}>
        {`${comment.kids?.length} replies`}
      </Typography>
    </Button>
  );
};

export { ButtonReplies };
export type { ButtonRepliesProps };
