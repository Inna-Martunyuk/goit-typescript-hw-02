export interface ImageType {
  id: string;
  alt_description?: string;
  urls: {
    small: string;
    regular: string;
  };
}

export interface UnsplashPhoto {
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
