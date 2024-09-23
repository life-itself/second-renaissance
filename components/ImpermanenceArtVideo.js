import React from "react";

const ImpermanenceArtVideo = ({ heading, description, video }) => {
  return (
    <div className="container mx-auto mt-20 mb-20">
      <div className="flex flex-col md:flex-row justify-between gap-6">
        <div className="md:w-4/12 mb-10">
          <h2 className="font-bold font-inter text-3xl mb-2 md:mb-6">{heading}</h2>
          <p className="text-xl leading-8 mt-2">{description}</p>
        </div>
        <div className="md:w-8/12 flex flex-col items-center md:pl-8">
          <iframe
            className="aspect-video w-full"
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
