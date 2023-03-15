import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

interface CommentsQuantityProps {
  commentsQuantity: number;
}

const CommentsQuantity = ({ commentsQuantity }: CommentsQuantityProps) => {
  return (
    <Box sx={{ display: "flex", columnGap: 1.5 }}>
      <ChatBubbleOutlineIcon />
      <Typography
        variant="subtitle1"
        component="p"
        sx={{ fontWeight: 500, lineHeight: 1.3 }}
      >
        {commentsQuantity}
      </Typography>
    </Box>
  );
};

export { CommentsQuantity };
export type { CommentsQuantityProps };
