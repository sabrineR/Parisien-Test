import Image from "next/image";
import React from "react";

export const Actu = ({ articles }) => {
  return (
    <div>
      {articles.map((ar) => {
        return (
          <article key={ar.id}>
            <div style={{ display: "flex", marginTop: "20" }}>
              <div>
                <h2  style={{ fontSize: "22px", fontWeight: "600" }}>{ar.headlines.basic}</h2>
                {/* <h2>{ar.subheadlines.basic}</h2> */}
              </div>
              <div>
                <Image
                  src={`/images${ar.promo_items.basic.url}`}
                  alt={ar.promo_items.basic.caption}
                  width={221}
                  height={138}
                />
              </div>
            </div>
            <hr></hr>
          </article>
        );
      })}
    </div>
  );
};
