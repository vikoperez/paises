import React from "react";
import { Link } from "react-router-dom";


import "../../styles/Paises.css"

const Paises =({bandera, nombre, codigo})=>{
    return(
        <div className="contenedor-paises">
            <h2>{nombre}</h2>
            <img src={bandera} alt={codigo}/>
            <Link 
                className="Link" 
                to={`/detalles/${nombre}`}
                >Conoce mas
            </Link>
        </div>
    );
};

export default Paises;