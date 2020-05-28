import React, { Fragment, useState } from 'react';
import Header from './Components/Header';
import Formulario from './Components/Formulario';
import Clima from './Components/Clima';
import Error from './Components/Error';

function App() {

  const [busquedas, setbusquedas] = useState([]);

  const [resultado, setresultado] = useState({});

  const [errordatos, seterrordatos] = useState(false);

  const FnTraerDatosGeo = (busqueda) =>{
    setbusquedas({
      ...busquedas,
      busqueda
    })
  }

  let componente;
  if(errordatos){
    componente = <Error mensaje="No hay resultados" />
  }
  else{
    componente = <Clima 
      resultado={resultado}
    />
  }
  

  return (
    <Fragment>
      <Header titulo='Clima React App' />
      <div className="container-fluid bg-primary">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
            <div className="row justify-content-center">
              <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8">
                <Formulario 
                  FnTraerDatosGeo={FnTraerDatosGeo}
                  setresultado={setresultado}
                  seterrordatos={seterrordatos}            
                />
              </div>           
            </div>          
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
            {componente}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
