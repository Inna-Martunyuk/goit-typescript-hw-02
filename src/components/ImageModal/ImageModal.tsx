
import Modal from "react-modal";
import { ImageType } from "../../types/types";
import css from "./ImageModal.module.css";
Modal.setAppElement("#root");

interface ImageModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  imageSrc: ImageType | null;
}

const ImageModal = ({ isOpen, onRequestClose, imageSrc }: ImageModalProps) => {
  
  if (!imageSrc || !imageSrc.urls || !imageSrc.urls.regular) {
    return (
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        shouldCloseOnOverlayClick={true}
        shouldCloseOnEsc={true}
        className={css.modal}
        overlayClassName={css.overlay}
      >
        <p>Image not found</p>
      </Modal>
    );
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
      className={css.modal}
      overlayClassName={css.overlay}
    >
      <img
        src={imageSrc.urls.regular}
        alt={imageSrc.alt_description || "Large preview"}
        className={css.image}
      />
    </Modal>
  );
};

export default ImageModal;
