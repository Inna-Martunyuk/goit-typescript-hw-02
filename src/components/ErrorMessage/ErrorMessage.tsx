
import css from "./ErrorMessage.module.css";

interface ErrorMessageProps {
  error: boolean | string | Error;
}

function ErrorMessage({ error }: ErrorMessageProps) {
  return (
    <div className={css.error}>
      <p>😬 Whoops, something went wrong!</p>
      <p>🔄 Please try reloading this page!</p>
      {typeof error === "string" && <p>Details: {error}</p>}
      {error instanceof Error && <p>Details: {error.message}</p>}
    </div>
  );
}

export default ErrorMessage;
