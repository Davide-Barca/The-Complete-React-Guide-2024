import { useRouteError } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

export default function ErrorPage() {
  const error = useRouteError();

  console.log(error)

  let title = "An error occurred!"; // default title
  let message = "Something went wrong!"; // default message

  if (error.status === 500) {
    message = JSON.parse(error.data).message;
  }

  if (error.status === 404) {
    title = "Not found!";
    message = "Could not find resource or page.";
  }

  return (
    <>
      <MainNavigation />
      <main>
        <h1>{title}</h1>
        <p>{message}</p>
      </main>
    </>
  );
}
