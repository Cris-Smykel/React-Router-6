import aboutImg from "../../../assets/images/about-img.png";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section>
      <article className="max-w-5xl m-auto pb-10">
        <picture>
          <img src={aboutImg} className="w-full max-w-lg object-cover" />
        </picture>

        <article className="flex flex-col gap-8 p-6 mt-4">
          <h1 className="text-3xl text-customBlack font-bold max-w-[26ch]">
            Don’t squeeze in a sedan when you could relax in a van.
          </h1>

          <p className="text-base font-medium text-customBlack max-w-[52ch]">
            Our mission is to enliven your road trip with the perfect travel van
            rental. Our vans are recertified before each trip to ensure your
            travel plans can go off without a hitch. <br />
            (Hitch costs extra 😉)
          </p>
          <p className="text-base font-medium text-customBlack max-w-[52ch] -mt-3">
            Our team is full of vanlife enthusiasts who know firsthand the magic
            of touring the world on 4 wheels.
          </p>

          <div className="bg-[#FFCC8D] p-8 flex flex-col gap-6 mt-4 rounded-md">
            <h2 className="font-bold text-2xl text-customBlack">
              Your destination is waiting. <br />
              Your van is ready.
            </h2>

            <Link
              className="p-3 bg-customBlack text-white font-bold text-base inline-block w-[174px] text-center rounded-[10px] cursor-pointer"
              to="/vans"
            >
              Explore our vans
            </Link>
          </div>
        </article>
      </article>
    </section>
  );
}
