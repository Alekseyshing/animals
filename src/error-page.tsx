import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" className="flex flex-col text-center items-center justify-center mt-10">
      <h1 className={'text-6xl'}>Oops!</h1>
      <p className={'text-2xl'}>Sorry, an unexpected error has occurred.</p>
    </div>
  );
}