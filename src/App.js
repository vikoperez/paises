import React from 'react';
import { BrowserRouter , Switch, Route } from 'react-router-dom';


// COMPONENTES
import PaisesPrincipal from "./componentes/PaisesPrincipal"
import TopPaises from './componentes/TopPaises';
import Secciones from './componentes/interacciones/Secciones';
import Header from './componentes/Header';
import PaisesSearch from './componentes/PaisesSearch';


// paginas extras
import TotalPaises from './componentes/paginaExtra/TotalPaises';

const App = () => {
  
  
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <div className="App">
            <section>
                <Header/>
                <PaisesSearch/>
                <Secciones/>
                <TopPaises/>
                <PaisesPrincipal/>                
            </section>
          </div>
        </Route>         
        <Route path="/detalles/:nombre" exact>
          <TotalPaises/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
