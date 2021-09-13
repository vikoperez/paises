import React, { useState } from "react";

// import PaisesIndividuales from "../PaisesIndividuales";
import SoloUnPais from "./SoloUnPais";
import Paises from "./Paises";
import FetchError from "../FetchError";

const Secciones =props =>{
    const [infoPais, setInfoPais] =useState([]);
    const [name, setName] = useState (null);
    const [error, setError]= useState(false);

    const manejarPaisInfo = async ()=>{
        
    const response = await fetch (`https://restcountries.eu/rest/v2/name/${name}`);

    const resultado = await response.json();

        if (resultado.status) {
            setError(true);
        }else{
            setInfoPais(resultado);
            setError(false);
        };

    
    };


    return (
        <>
        <SoloUnPais 
        setName={setName}
        manejarPaisInfo={manejarPaisInfo}
        />
        
        
        
        {error ? (
            <FetchError message ={error}/>
        ) :(

        <div>
            
            { infoPais.map( infoCountry =>(
                    <Paises 
                    key={infoCountry.name} 
                    bandera={infoCountry.flag} 
                    nombre={infoCountry.name} 
                    codigo={infoCountry.code}
                    
                    />
                ))}
        </div>)}
        </>
    );
};

export default Secciones;