import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="p-6">
      <article className="flex flex-col items-center gap-10">
        <h1 className="text-2xl text-black font-bold text-center">
          The page you were looking for was not found!
        </h1>

        <Link
          to="/"
          className="text-medium p-2 pr-6 pl-6 text-lg bg-black text-white cursor-pointer"
        >
          GO HOME
        </Link>
      </article>
    </section>
  );
}
