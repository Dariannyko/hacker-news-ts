import { useState } from "react";
import { getStories, newStoriesUrl } from "./shared/hacker-news-api";
import { Outlet } from "react-router-dom";
import { Header } from "./components/header";
import { Container } from "@mui/material";

function App() {
  const [storiesIds, setStoriesIds] = useState<number[]>([]);

  const downloadStories = () => {
    setStoriesIds([]);
    getStories(newStoriesUrl).then((storiesIds) => {
      setStoriesIds(storiesIds);
    });
  };

  return (
    <div className="App">
      <Header downloadStories={downloadStories} setStoriesIds={setStoriesIds} />
      <Container sx={{ marginTop: 4 }}>
        <Outlet
          context={{
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
