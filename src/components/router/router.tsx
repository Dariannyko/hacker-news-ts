import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import { StoriesContainer } from "../pages/stories-container";
import { Story } from "../pages/story";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <StoriesContainer />,
      },
      {
        path: "/news/:newsId",
        element: <Story />,
      },
    ],
  },
]);

export { router };
