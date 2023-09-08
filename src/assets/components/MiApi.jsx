import axios, * as others from "axios";
import CardNav from "./cards";
import { useEffect, useState } from "react";

const DyD = ({ search, DyDData, setDyDData }) => {
  const getData = async () => {
    //desde https://open5e.com/
    const apiUrl = `https://api.open5e.com/v1/spells/?search=${search}`;

    // se podrian agregar categorias mas grandes de busqueda en la api, si por ejemplo pusieramos un useState que modificara en la url la palabra spells, como es que se añade al final de search ej: https://api.open5e.com/v1/${aCambiar}/?search=${search} ; pero esto  implicaria cambiar las tarjetas para que calzaran con cada categoria, se podria trabajar esto con if o ternarios en el return
    axios
      .get(apiUrl)

      .then((response) => {
        console.log(response.data.results);
        setDyDData(response.data.results);
      })
      .catch((error) => {
        console.log(error.error);
      });
  };

  useEffect(() => {
    getData();
  }, [search]);

  return (
    <>
      {/* ejemplo de lo anterior seri apor ejmeplo 
      
      {apiUrl=https://api.open5e.com/v1/spells/?search=${search}? <CardNav con modificaciones/> : null}
      o modificando direcamnete dentro del componente CardNav
      
      */}
      <CardNav DyDData={DyDData} />
    </>
  );
};

export default DyD;
