import React, { useState } from "react";
// import Paises from "./interacciones/Paises";

const ApiCountrys = props=>{
    const [informacionPais, setInformacionPais] =useState([]);
    // const [nombre, setNombre] = useState(null);

    const manejarDatosPaises = async () =>{
        const respuesta = await fetch(`https://restcountries.eu/rest/v2/all`);

        const resultado = await respuesta.json();
        setInformacionPais(resultado);
        console.log(resultado)

    }
}

export default ApiCountrys