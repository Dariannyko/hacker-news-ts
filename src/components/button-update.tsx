import IconButton from "@mui/material/IconButton";

interface ButtonUpdateProps {
  getUpdate: () => void;
  buttonSize: number;
  buttonColor: string | undefined;
  iconType: JSX.Element;
}

const ButtonUpdate = ({
  getUpdate,
  buttonSize,
  buttonColor,
  iconType,
}: ButtonUpdateProps) => {
  return (
    <IconButton
      onClick={getUpdate}
      sx={{ width: buttonSize, height: buttonSize, color: buttonColor }}
    >
      {iconType}
    </IconButton>
  );
};

export { ButtonUpdate };
export type { ButtonUpdateProps };
