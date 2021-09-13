import React,{useState} from "react";
import "../styles/App.css"

// COMPONENTES
import LlamarPaises from "../Hooks/LlamarPaises";
import MapeoPaises from "./MapeoPaises";

const PaisesPrincipal = () => {

    const [final, setFinal]= useState(9);
    const [inicial, setInicial] =useState(0);

    let paises = LlamarPaises(`https://restcountries.eu/rest/v2/all`);

    let verMas = paises.slice(inicial, final);

    return(
        <div>
            
            <div className="primer-pagina">
                {verMas.map(paises=>(
                    <MapeoPaises
                    img={paises.flag}
                    name={paises.name}
                    capital={paises.capital}
                    key={paises.id}
                    />
                ))}
            </div>
            
            <div className="boton-paises">
                <button onClick={()=>{
                    setFinal(final-9);
                    setInicial(inicial-0);
                }}>
                    ver menos
                </button>
                <a href="#inicio">inicio</a>
                <button onClick={()=>{
                    setFinal(final+9);
                    setInicial(inicial+0);
                }}>
                    ver mas
                </button>
                
            </div>
        </div>
    )
};


export default PaisesPrincipal;

