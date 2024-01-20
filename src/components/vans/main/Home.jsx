import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [data, setData] = useState(() => []);

  useEffect(() => {
    async function getData() {
      try {
        const dataResponse = await fetch("/data/data.json");

        if (!dataResponse.ok) {
          return;
        }

        const dataToUse = await dataResponse.json();

        setData(dataToUse);
      } catch (error) {
        window.alert("There was an error, please, try again later.");
      }
    }

    getData();
  }, []);

  const vanElements = data.map((dataFilter) => {
    return (
      <VanElement
        key={dataFilter.id}
        title={dataFilter.title}
        content={dataFilter.content}
        id={dataFilter.id}
      />
    );
  });

  return (
    <section>
      <div className="p-6 pb-10">
        <article className="flex flex-col gap-10">{vanElements}</article>
      </div>
    </section>
  );
}

function VanElement(props) {
  return (
    <article className="flex flex-col gap-4 p-4 border border-customGray">
      <h2 className="text-2xl text-customBlack font-bold">{props.title}</h2>

      <p className="text-base font-medium text-customBlack">{props.content}</p>

      <Link
        to={`/vans/${props.id}`}
        className="text-base text-blue-500 cursor-pointer font-medium"
      >
        Learn More
      </Link>
    </article>
  );
}
