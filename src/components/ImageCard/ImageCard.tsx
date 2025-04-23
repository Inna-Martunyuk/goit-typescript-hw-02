import css from "./ImageCard.module.css";
import { ImageType } from "../../types/types";

interface ImageCardProps {
  image: ImageType;
  onClick: () => void;
}

function ImageCard({
  image: { alt_description, urls },
  onClick,
}: ImageCardProps) {
  if (!urls || !urls.small) {
    return <div className={css.card}>Image not available</div>;
  }

  return (
    <div className={css.card}>
      <img
        width={300}
        height={250}
        src={urls.small}
        alt={alt_description || "Image"}
        onClick={onClick}
        className={css.image}
      />
    </div>
  );
}

export default ImageCard;
