export const baseUrl = "https://hacker-news.firebaseio.com/v0/";
export const newStoriesUrl = `${baseUrl}newstories`;
export const storyUrl = `${baseUrl}item/`;

export const getStories = async (url: string) => {
  const currentUrl = `${url}.json`
  try {
    const response = await fetch(currentUrl);
    if (!response.ok) {
      throw new Error("Ошибка запроса");
    }
    const json = await response.json();

    return json;
  } catch (error) {
    return (error as Error).message;
  }
};


