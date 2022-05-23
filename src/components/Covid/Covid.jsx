import React from "react";

export default function Covid() {
  return (
    <section className="container mx-auto antialiased py-5">
      <section className="flex justify-center flex-col md:flex-col lg:flex-row text-center p-5">
        <div className=" bg-white px-10 py-10">
          <span className=" text-red-600 mb-10 font-bold font-mono">
            6.052.100
          </span>
          <p className=" font-bold font-mono">Terkonfirmasi</p>
        </div>
        <div className=" bg-white px-10 py-10">
          <span className=" text-green-600 mb-10 font-bold font-mono">
            5.891.872
          </span>
          <p className=" font-bold font-mono">Sembuh</p>
        </div>
        <div className=" bg-white px-10 py-10">
          <span className=" text-red-600 mb-10 font-bold font-mono">3.715</span>
          <p className=" font-bold font-mono">Dalam Perawatan</p>
        </div>
        <div className=" bg-white px-10 py-10">
          <span className=" text-red-600 mb-10 font-bold font-mono">
            156.513
          </span>
          <p className=" font-bold font-mono">Meninggal</p>
        </div>
      </section>
    </section>
  );
}
