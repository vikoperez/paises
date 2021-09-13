import React, {  useState, useEffect} from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

import "../../styles/ExtraPag.css"

const TotalPaises = props=>{

    const {nombre} = useParams();
    console.log(nombre)
    const [detalles, setDetalles] = useState([]);

    const TraerApiOtraVez = async() =>{

        try{
            const response= await fetch(`https://restcountries.eu/rest/v2/name/${nombre}`);
            
            const resultado = await response.json();
            setDetalles (resultado);
            console.log (resultado);
        }catch(error){
            console.log (error);
        }
        
    };

    useEffect(()=>{
        TraerApiOtraVez();
    }, []);

    
    return(

        <div>
            
            <div className="extra-pag">
                <h2> Nombre: {detalles.name}</h2>
                <h3> Capital: {detalles.capital}</h3>
                <img src={detalles.flag} alt={detalles.name}/>
                <p> Region: {detalles.region}</p>
                
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

