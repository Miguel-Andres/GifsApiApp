// import React, { useState, useEffect } from "react";
// import { getGifs } from "../helpers/getGifs";
  import GifGridItem from "./GifGridItem";

import { useFetchGifs } from "../hooks/useFetchGifs";

export default function GifGrid({ category }) {


   const {loading ,data }= useFetchGifs(category)
  console.log(data)

  

  return (
    <>
      <h2 className=" animate__animated animate__fadeIn">{category}</h2>

      {loading && <p className="animate__animated animate__flash">Cargando</p> }

       <div className="card-grid">
        {data.map((item) => (
          <GifGridItem key={item.id} {...item} />
        ))}
      </div> 
    </>
  );
}
