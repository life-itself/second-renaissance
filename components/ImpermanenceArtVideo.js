import React from "react";

const ImpermanenceArtVideo = ({ heading, description, video }) => {
  return (
    <div className="container mx-auto mt-20 mb-20">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="md:w-6/12 mb-10">
          <h2 className="font-bold font-inter text-[22px]">{heading}</h2>
          <p className="text-xl leading-8 mt-2">{description}</p>
        </div>
        <div className="md:w-6/12 flex flex-col items-center">
          <iframe
            width="100%"
            height="315"
            src={
              "https://www.youtube.com/embed/" + video + "?si=vc8BvW2ZaEUSaP-h"
            }
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
};

export default ImpermanenceArtVideo;
