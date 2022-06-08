import React, { useState } from 'react';
import Axios from 'axios';
import Cookies from 'universal-cookie';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { TarjetaItem, Agregar } from '../../Elementos/Formularios.js';
import { Navigate } from "react-router-dom";

export const TarjetaItemComp = ({Icono, Codigo, Raza, Material, Img, Precio, Usuario}) => 
{
    const cookies = new Cookies();
    const url = "http://localhost:90/api/setuser";
    const UsuarioCookie = cookies.get("Usuario");

    const [Propietario, cambiarPropietario] = useState(null);
    const [Pagina, cambiarPagina] = useState(null);

    const CambiarOwner = () =>
    {
        Axios.post(url,
        {
            Codigo: Codigo,
            NewUser: UsuarioCookie,
            OldUser: Usuario,
            Price: Precio
        });
        
        cambiarPropietario(true);
    }

    const IrPagina = () => cambiarPagina(true);

	return  <TarjetaItem>
				<img alt="Imagen no disponible" className="IconoTarjeta" src={ Icono }/>
                <p className="CodigoTarjeta"> { Codigo } </p>
                <p className="RazaTarjeta"> { Raza } </p>
                <h6 className="MaterialTarjeta"> { Material } </h6>
                <img alt="Imagen no disponible" className="ImagenTarjeta" onClick={IrPagina} src={ Img }/>
                {Pagina === true && <Navigate to={"/Dashboard/" + Codigo}/>}
                {(Propietario === true || Usuario === UsuarioCookie) &&
                    <div className="CuadradoUsuario">
                        <p className="CuadradoUsuarioTexto">Owned</p>
                    </div>
                }
                <div className="CuadradoPlus" onClick={CambiarOwner}>
                    <Agregar icon={ faPlus } />
                </div>
                <p className="PrecioTarjetaTexto"> Precio: </p>
                <p className="PrecioTarjetaNumero"> { Precio } </p>
                <p className="UsuarioTarjetaTexto"> Dueño:</p>
                <p className="UsuarioTarjetaNombre"> { Propietario === true ? UsuarioCookie : Usuario } </p>
            </TarjetaItem>
}