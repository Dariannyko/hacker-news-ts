import { Outlet } from "react-router-dom";
import { Header } from "./components/header";
import { Container } from "@mui/material";
import { getStories, newStoriesUrl } from "./shared/hacker-news-api";
import { useState } from "react";

function App() {
  const [loading, setLoading] = useState(false);
  const [storiesIds, setStoriesIds] = useState([]);

  const downloadStories = () => {
    setLoading(true);
    setStoriesIds([]);
    getStories(newStoriesUrl).then((storiesIds) => {
      setStoriesIds(storiesIds);
      setLoading(false);
    });
  };

  return (
    <div className="App">
      <Header downloadStories={downloadStories} />
      <Container sx={{ marginTop: 4 }}>
        <Outlet
          context={{
            loading,
            storiesIds,
            setStoriesIds,
            downloadStories,
          }}
        />
      </Container>
    </div>
  );
}

export default App;
