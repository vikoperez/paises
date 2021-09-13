import React from "react";

// styles
import "./SeccionesStyles/SoloUnPais.css"


const SoloUnPais =({ setName, manejarPaisInfo})=>{
   return(
       <div className="main-secciones">
           <input 
           className="input"
           type="text" 
           placeholder="nombre del pais" 
           onChange={e=> setName(e.target.value)}
           />
           <button
           className="button" 
           onClick={manejarPaisInfo}
           >buscar</button>
       </div>
   ) 
} 
export default SoloUnPais;