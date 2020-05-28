import React, { Fragment, useState } from 'react';

const Formulario = ({FnTraerDatosGeo,setresultado,seterrordatos}) => {

    const [busqueda, setbusqueda] = useState({
        txtciudad: '',
        cmbpais: ''
    });

    const [error, seterror] = useState(false);

   
    const { txtciudad, cmbpais } = busqueda;

    const FnObtenerValores = (e) => {
        setbusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        })
    }

    const consultarAPI = async () => {
        const appId= 'cb1e56be44f4c32791ea32a1934554b8';
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${txtciudad},${cmbpais}&appid=${appId}`;
        
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        setresultado(resultado); 

        if(resultado.cod === '404'){
            seterrordatos(true);
        }else{
            seterrordatos(false);
        }
        
    }

    const ConsultarBusqueda = (e) =>{
        e.preventDefault();

        //validar
        if(txtciudad.trim() === '' || cmbpais.trim() === ''){
            seterror(true);
            return;
        }
        seterror(false);
        //pasar al componente principal
        consultarAPI();        
    }    

    return ( 
        <Fragment>
            <form
                onSubmit={ConsultarBusqueda}
            >
                {error ? <div className="alert alert-danger">Faltan seleccionar campos</div> : null}
                <div className="form-group">
                    <label htmlFor="txtciudad" className="text-white">Ciudad</label>
                    <input
                        type="text"
                        name="txtciudad"
                        id="txtciudad"
                        className="form-control"
                        placeholder="Ciudad"
                        value={txtciudad}
                        onChange={FnObtenerValores}
                    />                    
                </div>
                <div className="form-group">
                    <label htmlFor="cmbpais" className="text-white">País</label>
                    <select
                        name="cmbpais"
                        id="cmbpais"
                        className="form-control"
                        value={cmbpais}
                        onChange={FnObtenerValores}
                    >
                        <option value="">-- Selecciona un país --</option>
                        <option value="US">Estados Unidos</option>
                        <option value="MX">México</option>
                        <option value="AR">Argentina</option>
                        <option value="CO">Colombia</option>
                        <option value="CR">Costa Rica</option>
                        <option value="ES">España</option>
                        <option value="PE">Perú</option>
                    </select>                   
                </div>
                <button
                    type="submit"
                    className="btn btn-block btn-danger"
                >Consultar</button><br />
            </form>
        </Fragment>
     );
}
 
export default Formulario;