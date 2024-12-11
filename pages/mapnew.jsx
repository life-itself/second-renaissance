import React from "react";

const Map = () => {
  return (
    <div>
      <figure id="graphic" className="">
        <img src="/assets/img/ecosystem/second-renaissance-ecosystem-map.webp" usemap="#cohere-map" />
          <div>
          <map name="cohere-map">
            <area target="_blank" alt="" title="" href="https://lecticalive.org/" coords="1382,641,1562,690" shape="rect" />
            <area target="_blank" alt="" title="" href="https://innerdevelopmentgoals.org/" coords="1688,875,1815,928" shape="rect" />
            <area target="_blank" alt="" title="" href="https://en.wikipedia.org/wiki/Robert_Kegan" coords="1261,845,1475,894" shape="rect" />
            <area target="_blank" alt="" title="" href="https://vibe.camp/" coords="2301,680,2514,724" shape="rect" />
            <area target="_blank" alt="" title="" href="https://knowyourmeme.com/memes/subcultures/tpot-postrat" coords="2271,743,2393,782" shape="rect" />
            <area target="_blank" alt="" title="" href="https://www.metalabel.com/" coords="2441,807,2680,845" shape="rect" />
            <area target="_blank" alt="" title="" href="https://x.com/visakanv?lang=en" coords="2301,607,2373,632" shape="rect" />
          </map>
          </div>
        <figcaption className="text-xs sm:text-sm text-center mx-auto max-w-3xl block mt-5">Todo...</figcaption>
      </figure>
    </div>
  );
};

export function getStaticProps() {
  return {
    props: {
      meta: {
        layout: 'unstyled'
      }
    }
  }
}

export default Map;
