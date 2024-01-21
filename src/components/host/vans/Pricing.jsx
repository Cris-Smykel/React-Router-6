import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Pricing() {
  const [vanData, setVanData] = useState(() => ({}));

  const id = useParams().id;

  useEffect(() => {
    async function getData() {
      try {
        const dataResponse = await fetch("/data/vans.json");

        if (!dataResponse.ok) {
          return;
        }

        const dataToUse = await dataResponse.json();

        const vanDataToUse = dataToUse.filter((data) => {
          return data.id == id;
        });

        setVanData(vanDataToUse[0]);
      } catch (error) {
        window.alert("There was an error, please, try again later.");
      }
    }

    getData();
  }, []);

  return (
    <section>
      <article className="flex flex-col gap-4 p-4 border border-customGray">
        <h2 className="text-2xl text-customBlack font-bold">
          Pricing of {vanData.title}
        </h2>

        <p className="text-base font-medium text-customBlack">
          {vanData.price}
        </p>
      </article>
    </section>
  );
}
