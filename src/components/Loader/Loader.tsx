import css from "./Loader.module.css";
import ClipLoader from "react-spinners/ClipLoader";

interface LoaderProps {
  isLoading: boolean;
}

function Loader({ isLoading }: LoaderProps) {
  return (
    <div className={css.loader}>
      <ClipLoader
        loading={isLoading}
        size={100}
        color="black"
        speedMultiplier={1}
        aria-label="Loading Spinner"
      />
    </div>
  );
}

export default Loader;
