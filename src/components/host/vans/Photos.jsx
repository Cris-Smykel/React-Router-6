import { useOutletContext, useParams } from "react-router-dom";

export default function Photos() {
  const { vansData } = useOutletContext();
  const id = useParams().id;

  const vanDataToUse = vansData.filter((data) => {
    return data.id == id;
  });

  const vanData = vanDataToUse[0];

  if (!vanData) {
    return <h1 className="font-bold text-2xl text-blue-500">Loading...</h1>;
  }

  return (
    <section>
      <article className="flex flex-col gap-4 p-4 border border-customGray">
        <h2 className="text-2xl text-customBlack font-bold">
          Photos of {vanData.title}
        </h2>

        <p className="text-base font-medium text-customBlack">
          {vanData.content}
        </p>
      </article>
    </section>
  );
}
