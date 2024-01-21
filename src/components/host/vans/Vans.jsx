import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

export default function Vans() {
  const [vansData, setVansData] = useState(() => []);

  const [searchParams, setSearchParams] = useSearchParams();

  const orderBy = searchParams.get("orderBy");

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
        let vansData = await getVansDataRequest();

        if (orderBy) {
          if (orderBy.toLocaleLowerCase() === "desc") {
            vansData = vansData.reverse();
          }
        }

        setVansData(vansData);
      } catch (error) {
        console.log(error);
      }
    };

    getVansData();
  }, [orderBy]);

  // function getSearchParams(key, value) {
  //   const sp = new URLSearchParams(searchParams);

  //   if (value === null) {
  //     sp.delete(key);
  //   } else {
  //     sp.set(key, value);
  //   }

  //   return `?${sp.toString()}`;
  // }

  function handleChangeParams(key, value) {
    setSearchParams((prevParams) => {
      if (value === null) {
        prevParams.delete(key);
      } else {
        prevParams.set(key, value);
      }

      return prevParams;
    });
  }

  return (
    <section className="mt-4 p-4">
      <article className="flex flex-col gap-6">
        <h1 className="text-2xl font-bold text-green-500">Your listed vans</h1>

        <div className="flex gap-4 items-center">
          <button
            onClick={() => handleChangeParams("orderBy", "ASC")}
            type="button"
            className={`p-2 pr-6 pl-6 text-lg text-white bg-blue-400 ${
              orderBy && orderBy.toLocaleLowerCase() === "asc" && "bg-green-500"
            } rounded-lg w-fit cursor-pointer border border-[rgba(0,0,0,.2)]`}
          >
            Order by ASC
          </button>
          <button
            onClick={() => handleChangeParams("orderBy", "DESC")}
            type="button"
            className={`p-2 pr-6 pl-6 text-lg text-white bg-blue-400 ${
              orderBy &&
              orderBy.toLocaleLowerCase() === "desc" &&
              "bg-green-500"
            } rounded-lg w-fit cursor-pointer border border-[rgba(0,0,0,.2)]`}
          >
            Order by DESC
          </button>
          {orderBy && (
            <button
              onClick={() => handleChangeParams("orderBy", null)}
              type="button"
              className="p-2 pr-6 pl-6 text-lg text-white bg-blue-400 rounded-lg w-fit cursor-pointer border border-[rgba(0,0,0,.2)]"
            >
              Clear
            </button>
          )}

          {/* <Link
            to={getSearchParams("orderBy", "ASC")}
            className="p-2 pr-6 pl-6 text-lg text-white bg-blue-400 rounded-lg w-fit cursor-pointer border border-[rgba(0,0,0,.2)]"
          >
            Order by ASC
          </Link>
          <Link
            to={getSearchParams("orderBy", "DESC")}
            className="p-2 pr-6 pl-6 text-lg text-white bg-blue-400 rounded-lg w-fit cursor-pointer border border-[rgba(0,0,0,.2)]"
          >
            Order by DESC
          </Link>
          <Link
            to={getSearchParams("orderBy", null)}
            className="p-2 pr-6 pl-6 text-lg text-white bg-blue-400 rounded-lg w-fit cursor-pointer border border-[rgba(0,0,0,.2)]"
          >
            Clear
          </Link> */}

          {/* <button
            onClick={() => setSearchParams({ orderBy: "ASC" })}
            type="button"
            className="p-2 pr-6 pl-6 text-lg text-white bg-blue-400 rounded-lg w-fit cursor-pointer border border-[rgba(0,0,0,.2)]"
          >
            Order by ASC
          </button>
          <button
            onClick={() => setSearchParams({ orderBy: "DESC" })}
            type="button"
            className="p-2 pr-6 pl-6 text-lg text-white bg-blue-400 rounded-lg w-fit cursor-pointer border border-[rgba(0,0,0,.2)]"
          >
            Order by DESC
          </button>
          <button
            onClick={() => setSearchParams({})}
            type="button"
            className="p-2 pr-6 pl-6 text-lg text-white bg-blue-400 rounded-lg w-fit cursor-pointer border border-[rgba(0,0,0,.2)]"
          >
            Clear
          </button> */}

          {/* <Link
            to="?orderby=asc"
            className="p-2 pr-6 pl-6 text-lg text-white bg-blue-400 rounded-lg w-fit cursor-pointer border border-[rgba(0,0,0,.2)]"
          >
            Order by ASC
          </Link>
          <Link
            to="?orderby=desc"
            className="p-2 pr-6 pl-6 text-lg text-white bg-blue-400 rounded-lg w-fit cursor-pointer border border-[rgba(0,0,0,.2)]"
          >
            Order by DESC
          </Link>
          <Link
            to="."
            className="p-2 pr-6 pl-6 text-lg text-white bg-blue-400 rounded-lg w-fit cursor-pointer border border-[rgba(0,0,0,.2)]"
          >
            Clear
          </Link> */}
        </div>

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
