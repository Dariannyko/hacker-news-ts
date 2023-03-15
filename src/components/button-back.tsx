import { useNavigate } from "react-router-dom";
import { returnBack } from "../shared/const";
import Button from "@mui/material/Button";

interface ButtonBackProps {
  setStoriesIds: (value: number[]) => void;
}

const ButtonBack = ({ setStoriesIds }: ButtonBackProps) => {
  const navigate = useNavigate();

  return (
    <Button
      color="inherit"
      onClick={() => {
        navigate(returnBack);
        setStoriesIds([]);
      }}
    >
      Back
    </Button>
  );
};

export { ButtonBack };
export type { ButtonBackProps };
