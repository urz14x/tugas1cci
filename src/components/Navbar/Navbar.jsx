import React from "react";
import { images } from "../../constants";

export default function Navbar() {
  return (
    <nav className="container mx-auto py-5 sm:bg-transparent">
      <div className="flex justify-between items-center px-8">
        <div className="hidden sm:block">
          <span className="font-bold text-2xl absolute text-oldbrown">
            Cov-ID
          </span>
          <img className="mt-3 ml-3" src={images.BgText} alt="" />
        </div>
        <div className="block sm:hidden">
          <span>
            <h3 className=" text-3xl">Cov-ID</h3>
          </span>
        </div>

        <nav className="flex gap-9 items-center sm:hidden">
          <li className="text-base list-none">
            <a href="#">
              <i className="uil uil-estate text-3xl text-oldbrown"></i>
            </a>
          </li>
          <li className="text-base list-none">
            <a href="#Tentang">
              <i className="uil uil-medkit text-3xl text-oldbrown"></i>
            </a>
          </li>
          <li className="text-base list-none">
            <a href="#Gejala">
              <i className="uil uil-temperature text-3xl text-oldbrown"></i>
            </a>
          </li>
        </nav>

        <nav className=" gap-28 items-center hidden sm:flex">
          <li className="text-base list-none">
            <a href="#">Home</a>
          </li>
          <li className="text-base list-none">
            <a href="#Tentang">Tentang</a>
          </li>
          <li className="text-base list-none">
            <a href="#Gejala">Gejala</a>
          </li>
        </nav>
      </div>
    </nav>
  );
}
