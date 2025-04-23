import axios from "axios";

interface UnsplashPhoto {
  id: string;
  alt_description: string | null;
  urls: {
    small: string;
    regular: string;
    full: string;
    [key: string]: string;
  };
  user: {
    name: string;
    portfolio_url: string | null;
  };
  
}

interface UnsplashResponse {
  results: UnsplashPhoto[];
  total: number;
  total_pages: number;
}

export const fetchArticles = async (
  topic: string,
  currentPage: number
): Promise<UnsplashPhoto[]> => {
  const response = await axios.get<UnsplashResponse>(
    "https://api.unsplash.com/search/photos",
    {
      headers: {
        Authorization: "Client-ID bynmiCSeXQeWA6AnyRqvyr7Ej2kwVsWHZmx_O2vwung",
      },
      params: {
        query: topic,
        page: currentPage,
        per_page: 12,
        orientation: "landscape",
      },
    }
  );

  return response.data.results;
};
