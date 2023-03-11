import { Link, useLocation, useNavigate } from "react-router-dom";
import { returnBack } from "../shared/const";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import RefreshIcon from "@mui/icons-material/Refresh";
import Button from "@mui/material/Button";

interface HeaderProps {
  downloadStories: () => void;
}

export default function Header({ downloadStories }: HeaderProps) {
  const location = useLocation();
  const navigate = useNavigate();
  const newsPath = location.pathname.slice(1, 5) === "news";

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="p" sx={{ flexGrow: 1 }}>
          <Link to={`/`}>Hacker News</Link>
        </Typography>
        {newsPath && (
          <Button
            color="inherit"
            onClick={() => {
              navigate(returnBack);
            }}
          >
            Back
          </Button>
        )}

        {location.pathname === "/" && (
          <IconButton size="large" color="inherit" onClick={downloadStories}>
            <RefreshIcon />
          </IconButton>
        )}
      </Toolbar>
    </AppBar>
  );
}

export { Header };
export type { HeaderProps };
