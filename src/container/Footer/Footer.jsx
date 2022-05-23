import React from "react";
import { images } from "../../constants";

export default function Footer() {
  return (
    <footer className="container mx-auto">
      <section className="mb-9">
        <h1
          id="Gejala"
          className=" text-2xl sm:text-3xl text-center sm:text-justify  font-bold text-oldbrown"
        >
          Gejala Utama Covid-19
        </h1>
        <img
          className="relative -top-5 left-40 sm:left-0 -z-50"
          src={images.BgTextFont}
          alt=""
        />
      </section>
      <section className="flex flex-col sm:flex-col md:flex-row justify-center gap-44">
        <div className="flex flex-col items-center">
          <img className=" w-48" src={images.Batuk} alt="" />
          <p className=" font-bold text-smoothfont">1. Batuk</p>
        </div>
        <div className="flex flex-col items-center">
          <img className=" w-48" src={images.Kelelahan} alt="" />
          <p className=" font-bold text-smoothfont">2. Kelelahan</p>
        </div>
        <div className="flex flex-col items-center">
          <img className=" w-48" src={images.SakitKepala} alt="" />
          <p className=" font-bold text-smoothfont">3. Sakit Kepala</p>
        </div>
      </section>
    </footer>
  );
}
