import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Vans() {
  const [vansData, setVansData] = useState(() => []);

  const vansElements = vansData.map((vanData) => {
    return (
      <VansContainer
        title={vanData.title}
        price={vanData.price}
        key={vanData.id}
        id={vanData.id}
      />
    );
  });

  useEffect(() => {
    const getVansData = async () => {
      try {
        const vansData = await getVansDataRequest();
        setVansData(vansData);
      } catch (error) {
        console.log(error);
      }
    };

    getVansData();
  }, []);

  return (
    <section className="mt-4 p-4">
      <article>
        <h1>Your listed vans</h1>

        <ol className="flex flex-col gap-6">{vansElements}</ol>
      </article>
    </section>
  );
}

function VansContainer(props) {
  return (
    <li className="w-fit">
      <Link to={`/host/vans/${props.id}`}>
        <div>
          <div className="w-32 aspect-square bg-green-400"></div>

          <div>
            <h2>{props.title}</h2>
            <mark>{props.price}</mark>
          </div>
        </div>
      </Link>
    </li>
  );
}

async function getVansDataRequest() {
  try {
    const response = await fetch("/data/vans.json");
    const vansData = response.json();

    return vansData;
  } catch (error) {
    console.log(error);
  }
}
