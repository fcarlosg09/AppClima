import React, { Fragment } from 'react';

const Clima = ({resultado}) => {
    
    const { name , main } = resultado;
    if(!name) return null;

    const kelvin = 273.15;
    return ( 
        <Fragment>
            <div className="card">
                <div className="card-header h4 text-center">
                {name}
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-6">
                            <div className="card">                                
                                <div className="card-header bg-danger text-white text-center py-3 h4">
                                    { parseFloat(main.temp - kelvin).toFixed(2)} <span>&#x2103;</span>
                                </div>
                                <div className="card-body h4 text-center">
                                    Temperatura
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="card">                                
                                <div className="card-header bg-warning text-white text-center py-3 h4">
                                    { parseFloat(main.humidity).toFixed(2)}°
                                </div>
                                <div className="card-body h4 text-center">
                                    Humedad
                                </div>
                            </div>                              
                        </div>                    
                    </div>                    
                </div>
            </div><br/>
            
            
        </Fragment>        
     );
}
 
export default Clima;