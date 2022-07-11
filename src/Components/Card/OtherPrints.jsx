import React from "react";
import ArtCrop from "./ArtCrop";

const OtherPrints = ({ prints_search_uri, setPrints, prints }) => {
  React.useEffect(() => {
    let allPrints = [];
    fetch(prints_search_uri)
      .then((response) => response.json())

      .then((json) => {
        setPrints(json.data);
      });
  }, []);

  if (prints.length === 1) return null;

  return (
    <>
      {/* <p>Total Cards: {prints.length}</p> */}
      <div className="flex flex-col flex-wrap">
        {prints.map((print) => (
          <div className="mb-2 text-xs font-bold" key={print.id}>
            <ArtCrop
              src={print.image_uris.art_crop}
              large={print.image_uris.large}
            />
            {print.released_at} - {print.set_name}
          </div>
        ))}
      </div>
    </>
  );
};

export default OtherPrints;
