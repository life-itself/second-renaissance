import ImpermanenceArtVideo from "../../components/ImpermanenceArtVideo";

const Page = () => {
  return (
    <>
      <Hero></Hero>
    </>
  );
};

export function getStaticProps() {
  return {
    props: {
      meta: {
        layout: "unstyled",
      },
    },
  };
}

export default Page;

const magazineLink = '/assets/docs/impermanence-magazine-art-of-second-renaissance.pdf';
const manifestoLink = '/assets/docs/art-of-second-renaissance-manifesto.pdf';

const Hero = () => (
  <div className="overflow-hidden bg-white">
    <div className="mx-auto max-w-7xl px-4 lg:px-8">
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
        <div className="lg:pr-8 lg:pt-56">
          <div className="lg:max-w-lg">
            <h1 className="font-normal text-4xl leading-[50px]">
              Magazine and Exhibition
            </h1>
            <p className="mt-6 text-xl leading-8">
              For our first magazine issue and exhibition we chose the theme of
              Impermanence. Across religions there is often the practice of
              sitting with the impermanent nature of life, from the five
              remembrance to the memento mori, these contemplation allows us to
              grow our wisdom and insight of inter-connectedness.
            </p>
            <p className="mt-8">
              <a href={magazineLink} className="btnsq btn-black text-xl">
                Download magazine
              </a>
              <a href="#exhibition" className="btnsq btn-black text-xl ml-2">
                View exhibition
              </a>
            </p>
          </div>
        </div>
        <div className="flex items-start justify-center order-first">
          <img
            src="/assets/img/art/impermanence-cover.webp"
            alt=""
            className="mx-auto  max-w-[100%]"
          />
        </div>
      </div>
    </div>
    <div className="container mx-auto ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        <div className="">
          <img
            src="/assets/img/art/impermanence-1.webp"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <img
            src="/assets/img/art/impermanence-2.webp"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <img
            src="/assets/img/art/impermanence-3.webp"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <img
            src="/assets/img/art/impermanence-4.webp"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
    <div className="container mx-auto mt-20 mb-20">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-7/12">
          <p className="text-xl leading-8">
            We don't want to just talk about the 2nd Renaissance, we want to
            make it happen. We want to make this new culture come to live. What
            better way to birth a new cultural paradigm than through art?
            <br />
            <br />
            This is the first issue of the Second Renaissance Magazine on the
            theme of impermanence. It is only possible through the  contribution
            of the community work and time. We are grateful to all the
            contributors. The magazine is grounded under the Art of the Second
            Renaissance manifesto and essay.
            <br />
            <br />
            <em>
              If you wish to contribute works for our next issue Mythos please
              write to art@lifeitself.org
            </em>
          </p>

          <p className="mt-8">
            <a href={manifestoLink} className="btnsq btn-black text-xl">
              Download Manifesto
            </a>
          </p>
        </div>
        <div className="md:w-4/12 flex flex-col items-center">
          <img
            src="/assets/img/art/impermanence-cover-square.webp"
            alt=""
            className="w-full h-full object-cover"
          />
          <p className="mt-[-50px]">
            <a href={magazineLink} className="btnsq btn-black text-xl">
              Download Magazine
            </a>
          </p>
        </div>
      </div>
    </div>
    <section id="exhibition" className="container mx-auto mt-20 mb-20">
      <div className="block">
        <div className="w-full">
          <h2 className="text-center text-2xl md:text-7xl h-[84.72px] text-bold font-inter font-normal">
            View the Impermanence Exhibition
          </h2>
        </div>
      </div>
    </section>
    <ImpermanenceArtVideo
      heading=" The art of impermanence"
      description={
        "We are taken through the intention behind the exhibition curated by Life Itself co-founder and artist Sylvie Barbier. She shares the importance of the spiritual practice in this time of uncertainty through the art of sitting with impermanence."
      }
      video={"BCNPMCZ_leI"}
    />
    <ImpermanenceArtVideo
      heading="Grim Reaper - with Luc Warring"
      description={
        "Luc Waring share his relationship with death from his mindfulness practice through series of paintings of the Grim Reapers."
      }
      video={"dzZJ0X0CkrI"}
    />
    <ImpermanenceArtVideo
      heading="I give you my word - with Paz Perlman"
      description={
        'Paz Perlman share the story and meaning behind the art work "I give you my word" which was part of the Art of impermanence exhibition.'
      }
      video={"yXtU-Yp4yA0"}
    />
    <ImpermanenceArtVideo
      heading="I'm of the nature to die - with Sylvie Barbier"
      description={
        "Sylvie Barbier here share her journey of navigating grief and peace with to coexistence of the death of her father and her coming child which inspired the theme of the exhibition on impermanence."
      }
      video={"ttY24srAYI0"}
    />
    <ImpermanenceArtVideo
      heading="Metamorphosis - with Paul Tingen"
      description={
        "Paul Tingen share the relationship between his music and the buddhist teaching around impermanence."
      }
      video={"MP3b-O9f8_k"}
    />
    <ImpermanenceArtVideo
      heading="Nothing will ever stop the music - with Max Pugh"
      description={
        'Max Pugh shares about his contemplation of impermanence through his video installation work "Nothing will ever stop the music" made in 2022 after the pandemic.'
      }
      video={"m4QQRfKIMjU"}
    />
    <ImpermanenceArtVideo
      heading="Cosmic Birth- by Sylvie Barbier"
      description={
        "the performance is the first act of Metamorphose a transformative opera by Sylvie Barbier"
      }
      video={"lWoUdIikBZI"}
    />
    <ImpermanenceArtVideo
      heading="Phoenix - by Sylvie Barbier"
      description={
        "The artist went to record the damages of a wild fire which took place in France. She contrast the destruction with the innocence of her 2 years old son. The fire is a direct reminder of the impermanent nature of life."
      }
      video={"QNIMVEdTEEg"}
    />
    {/*
    <ImpermanenceArtVideo
      heading="Ashes to ashes - By Sylvie Barbier (short)"
      description={
        "The artist performs a ritual in a cave along the Dordogne river (home of many prehistoric cave painting sites) to honour the life and death of her father."
      }
      video={"Llon-fUFNtU"}
    />
    <ImpermanenceArtVideo
      heading="Ashes to ashes - By Sylvie Barbier (full version)"
      description={
        "The artist performs a ritual in a cave along the Dordogne river (home of many prehistoric cave painting sites) to honour the life and death of her father."
      }
      video={"obD1Jj80ajw"}
    />
    */}
  </div>
);
