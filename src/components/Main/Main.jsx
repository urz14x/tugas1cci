import React from "react";
import { images } from "../../constants";
export default function Main() {
  return (
    <>
      <svg
        id="Tentang"
        className="relative"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 319"
      >
        <path
          fill="#FBAEAE"
          fill-opacity="1"
          d="M0,96L34.3,117.3C68.6,139,137,181,206,170.7C274.3,160,343,96,411,80C480,64,549,96,617,133.3C685.7,171,754,213,823,213.3C891.4,213,960,171,1029,170.7C1097.1,171,1166,213,1234,218.7C1302.9,224,1371,192,1406,176L1440,160L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
        ></path>
      </svg>
      <section className="grid place-content-center bg-youngred">
        <section className="flex flex-col md:flex-col lg:flex-row items-center">
          <section className=" text-center">
            <h1 className=" text-oldbrown font-bold text-3xl title-covid">
              Tentang Covid-19
            </h1>
            <img className=" w-72 sm:w-80 md:w-full" src={images.People} />
          </section>
          <article className=" max-w-2xl p-5">
            <p className="text-xl leading-relaxed font-semibold text-smoothfont">
              Corona Virus Disease 2019 atau yang biasa disingkat COVID-19
              adalah penyakit menular yang disebabkan oleh SARS-CoV-2, salah
              satu jenis koronavirus.Penderita COVID-19 dapat mengalami demam,
              batuk kering, dan kesulitan bernafas.
            </p>
          </article>
        </section>
      </section>
      <svg
        className="waves"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 315"
      >
        <path
          fill="#FBAEAE"
          fill-opacity="1"
          d="M0,96L34.3,117.3C68.6,139,137,181,206,170.7C274.3,160,343,96,411,80C480,64,549,96,617,133.3C685.7,171,754,213,823,213.3C891.4,213,960,171,1029,170.7C1097.1,171,1166,213,1234,218.7C1302.9,224,1371,192,1406,176L1440,160L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"
        ></path>
      </svg>
    </>
  );
}
