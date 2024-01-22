import { useRouteError } from "react-router-dom";

export default function Errors() {
  const errorMessage = useRouteError();

  return (
    <section className="p-6">
      <article>
        <h1 className="text-2xl text-red-500 font-medium">
          There was an error, {errorMessage.msg}
        </h1>
      </article>
    </section>
  );
}
