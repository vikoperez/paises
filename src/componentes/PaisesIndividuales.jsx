import React from "react";
import {BrowserRouter,Switch,Route} from "react-router-dom" 

// componentes
import SoloUnPais from "./interacciones/SoloUnPais"
import LlamarPaises from "../Hooks/LlamarPaises";

const PaisesIndividuales = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/">

                </Route>
            </Switch>
        </BrowserRouter>
    )

}

export default PaisesIndividuales;