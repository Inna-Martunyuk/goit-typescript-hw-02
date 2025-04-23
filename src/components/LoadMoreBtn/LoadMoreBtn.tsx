import css from "./LoadMoreBtn.module.css";

interface LoadMoreBtnProps {
  onClick: () => void;
}

function LoadMoreBtn({ onClick }: LoadMoreBtnProps) {
  return (
    <button className={css.button} onClick={onClick}>
      Load more
    </button>
  );
}

export default LoadMoreBtn;
