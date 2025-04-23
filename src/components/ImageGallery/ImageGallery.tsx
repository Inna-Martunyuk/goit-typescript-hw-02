import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";
import { ImageType } from "../../types/types";


interface ImageGalleryProps {
  images: ImageType[];
  onImageClick: (image: ImageType) => void;
}

const ImageGallery = ({ images, onImageClick }: ImageGalleryProps) => {
  return (
    <ul className={css.gallery}>
      {images.map((image) => (
        <li className={css.image} key={image.id}>
          <ImageCard image={image} onClick={() => onImageClick(image)} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
