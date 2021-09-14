import React, {  useState, useEffect} from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

import "../../styles/ExtraPag.css"

const TotalPaises = props =>{

    const {nombre} = useParams(null);
    const [detalles, setDetalles] = useState([0]);

    const TraerApiOtraVez = async() =>{

        try{
            const response= await fetch(`https://restcountries.eu/rest/v2/name/${nombre}`);
            
            const resultado = await response.json();
            setDetalles (resultado[0]);
            console.log (resultado);
        }catch(error){
            console.log (error);
        }
        
    };

    useEffect(()=>{
        TraerApiOtraVez();
        //eslint-disable-next-line react-hooks/exhaustive-deps
    },[detalles ]);

    
    return(

        <div>
            
            <div className="extra-pag" >
                <h2> Nombre: {detalles.name}</h2>
                <h3> Capital: {detalles.capital}</h3>
                <img src={detalles.flag} alt={detalles.name}/>
                <div className="sub-info">
                    <p> Region: {detalles.region}</p>
                    <p> population: {detalles.population}</p>
                    <p> region: {detalles.region}</p>
                    <p> subregion: {detalles.subregion}</p>
                </div>

                <Link
                    className="Link"
                    to={`/`}
                    >inicio
                </Link>
            </div>
        
        </div>
    )
    
}

export default TotalPaises;

