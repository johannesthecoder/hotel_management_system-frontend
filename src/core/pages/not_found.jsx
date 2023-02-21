import { FaRegFrownOpen } from "react-icons/fa";
import { useRouteError } from "react-router-dom";

export default function NotFoundPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div
      className="flex border flex-col items-center justify-center"
      style={{ height: "100vh" }}
    >
      <h1 className="text-3xl font-bold mb-4">Oops!</h1>
      <FaRegFrownOpen className="text-9xl mb-8" />
      <p className="text-raya-secondary mb-3">
        Sorry, an unexpected error has occurred.
      </p>
      <p className="">
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
