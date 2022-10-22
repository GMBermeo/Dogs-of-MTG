import React from "react";
import { TCard } from "../../types/TCard";
import ArtCrop from "./CardImage";

const OtherPrints = ({ prints_search_uri, setPrints, prints }: any) => {
  React.useEffect(() => {
    // eslint-disable-next-line prefer-const
    let allPrints = [];
    fetch(prints_search_uri)
      .then((response) => response.json())

      .then((json) => {
        setPrints(json.data);
      });
  }, []);

  if (prints.length === 1) return null;
  const quantidade = prints.length + 1;

  return (
    <>
      {/* <p>Total Cards: {prints.length}</p> */}
      <div
        className={
          quantidade > 4
            ? "grid grid-cols-4"
            : quantidade % 2 !== 0
            ? "grid grid-cols-2"
            : "grid grid-cols-3"
        }
      >
        {prints.map((print: TCard) => (
          <div className="mb-2 text-center text-xs font-bold" key={print.id}>
            <ArtCrop
              src={print.image_uris.large}
              large={print.image_uris.large}
            />
            <p>{print.set_name}</p>
            <p>{print.released_at}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default OtherPrints;
