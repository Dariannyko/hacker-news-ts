import { useLocation } from "react-router-dom";
import { ButtonUpdate } from "./button-update";
import { ButtonBack } from "./button-back";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import RefreshIcon from "@mui/icons-material/Refresh";

interface HeaderProps {
  downloadStories: () => void;
  setStoriesIds: (value: number[]) => void;
}

export default function Header({
  downloadStories,
  setStoriesIds,
}: HeaderProps) {
  const location = useLocation();

  const newsPath = location.pathname.slice(1, 5) === "news";
  const homePage = location.pathname === "/";

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography
          variant="h6"
          component="p"
          sx={{ flexGrow: 1, cursor: "context-menu" }}
        >
          Hacker News
        </Typography>
        {newsPath && <ButtonBack setStoriesIds={setStoriesIds} />}
        {homePage && (
          <ButtonUpdate
            getUpdate={downloadStories}
            buttonSize={48}
            buttonColor={"inherit"}
            iconType={<RefreshIcon />}
          />
        )}
      </Toolbar>
    </AppBar>
  );
}

export { Header };
export type { HeaderProps };
