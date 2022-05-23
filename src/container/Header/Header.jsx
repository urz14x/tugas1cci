import React from "react";
import { images } from "../../constants";
export default function Header() {
  return (
    <header className=" container mx-auto flex items-center justify-center flex-col sm:flex-col lg:flex-row  sm:gap-28 py-24 ">
      <section className="text-center sm:text-center md:text-justify">
        <div>
          <h1 className=" text-5xl font-bold text-smoothfont leading-relaxed font__header">
            Selamatkan dirimu
          </h1>

          <img
            src={images.BgTextBig}
            className="hidden relative -top-10 left-7 -z-10 sm:block"
            alt=""
          />
        </div>
        <h2 className=" text-4xl font-bold text-smoothfont leading-relaxed mb-5">
          Lindungi Dunia;
          <img
            className="relative -top-8 left-24 -z-20"
            src={images.BgTextFont}
            alt=""
          />
        </h2>

        <article className="">
          <p>
            Kawal informasi seputar COVID-19, <br /> secara tepat dan akurat
          </p>
          <br />
          <img
            className=" animate-arrow m-auto sm:m-auto md:m-0"
            src={images.Arrow}
            alt=""
          />
        </article>
      </section>
      <section className=" w-72 relative top-20 sm:top-0 md:w-96">
        <img src={images.HeroFamily} />
      </section>
    </header>
  );
}
