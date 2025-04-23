import { useEffect, useState } from "react";
import "./App.css";
import { fetchArticles } from "./services/api";
import SearchBar from "./components/SearchBar/SearchBar";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import Loader from "./components/Loader/Loader";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import ImageModal from "./components/ImageModal/ImageModal";
import { ImageType, UnsplashPhoto } from "./types/types";

const App: React.FC = () => {
  const [images, setImages] = useState<ImageType[]>([]);
  const [page, setPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [searchPhoto, setSearchPhoto] = useState<string>("");
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<ImageType | null>(null);

  const handleSearch = (topic: string): void => {
    setSearchPhoto(topic);
    setPage(1);
    setImages([]);
  };

  useEffect(() => {
    if (searchPhoto === "") return;

    async function getData(): Promise<void> {
      try {
        setIsLoading(true);
        setError(false);
        const rawData: UnsplashPhoto[] = await fetchArticles(searchPhoto, page);
        const data: ImageType[] = rawData.map((item) => ({
          id: item.id,
          alt_description: item.alt_description || "No description",
          urls: {
            small: item.urls.small,
            regular: item.urls.regular,
          },
        }));
        setImages((prevImages) => [...prevImages, ...data]);
      } catch (error) {
        console.error("API error:", error);
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }

    getData();
  }, [page, searchPhoto]);

  const handleMoreBtn = (): void => setPage((prevPage) => prevPage + 1);

  const openModal = (image: ImageType): void => {
    setSelectedImage(image);
    setModalIsOpen(true);
  };

  const closeModal = (): void => {
    setModalIsOpen(false);
    setSelectedImage(null);
  };

  return (
    <>
      <SearchBar onSubmit={handleSearch} />
      <ImageGallery images={images} onImageClick={openModal} />
      {isLoading && <Loader isLoading={isLoading} />}
      {error && (
        <ErrorMessage error="Something went wrong, please try again!" />
      )}
      {images.length > 0 && !isLoading && (
        <LoadMoreBtn onClick={handleMoreBtn} />
      )}
      <ImageModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        imageSrc={selectedImage}
      />
    </>
  );
};

export default App;
