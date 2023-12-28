import { Link } from "react-router-dom";
import bgImage from "../../../assets/images/home-bg.png";

export default function Hero() {
  return (
    <section className="home container-min-height p-6 pt-16 pb-16">
      <article className="flex flex-col gap-6  max-w-6xl m-auto">
        <h1 className="text-4xl text-white font-bold max-w-[25ch] ">
          You got the travel plans, we got the travel vans.
        </h1>
        <p className="font-medium text-white text-base max-w-[52ch] ">
          Add adventure to your life by joining the #vanlife movement. Rent the
          perfect van to make your perfect road trip.
        </p>

        <button
          type="button"
          className="bg-customOrange mt-6 max-w-[29.5rem] block rounded-md cursor-pointer"
        >
          <Link to="/vans" className="text-white text-base font-bold p-3 block">
            Find your Van
          </Link>
        </button>
      </article>
    </section>
  );
}
