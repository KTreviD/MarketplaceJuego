import React, { useState, useEffect } from 'react';
import { Header } from '../Header/Header';
import Cookies from 'universal-cookie';
import { Navigate, useParams } from "react-router-dom";
import Axios from 'axios';
import { DivInputFormulario } from '../Publico/DivInputFormulario';

export const PaginaItem = () => 
{
    const Codigo = useParams();
    const cookies = new Cookies();
    const [Contenido, cambiarContenido] = useState({MiPagina: null});
    const [Autenticado, cambiarAutenticado] = useState(true);
    const [PrecioConst, cambiarPrecioConst] = useState({campo: '', valido: null});
    const [PermisoPrecio, cambiarPermisoPrecio] = useState(null);
    const urlItem = "http://localhost:90/api/dashboard/" + Codigo.codigo;
    const urlPrecio = "http://localhost:90/api/precio";
    const UsuarioCookie = cookies.get("Usuario");

    const expresiones = 
    {
        Precio: /^[0-9_-]{1,6}$/
    }

    const CambiarPrecio = () =>
    {
        if(PrecioConst.valido === 'false') return;
        Axios.post(urlPrecio,
        {
            Codigo: Codigo.codigo,
            Precio: PrecioConst.campo
        });
        window.location.reload();
    }


    const Iniciar = () =>
    {
        if(UsuarioCookie === undefined) cambiarAutenticado(false);
        else cambiarAutenticado(true);

        Axios.post(urlItem,
            {
                Codigo: Codigo.codigo
            })
            .then(res => 
            {
                var Historial = new Array(res.data.length - 1);
                for(var i = 1 ; i < res.data.length; i++)
                {
                    let DateArray = "";
                    for(var j = 0 ; j < 19 ; j++)
                    {
                        if(j === 10) DateArray = DateArray + "/"; 
                        else DateArray = DateArray + res.data[i].Date[j];
                    }
                    Historial[i] = 
                        <div key={i}>
                            <div className="HistorialOldUserData">
                                <p className="HistorialData"> {res.data[i].OldUser}</p>
                            </div>
                            <div className="HistorialNewUserData">
                                <p className="HistorialData">{res.data[i].NewUser}</p>
                            </div>
                            <div className="HistorialPriceData">
                                <p className="HistorialData Price">{res.data[i].Price}</p>
                            </div>
                            <div className="HistorialDateData">
                                <p className="HistorialData">{DateArray}</p>
                            </div>
                        </div>
                }

                const Usuario = res.data[0].Usuario === "." ? "Nadie" : res.data[0].Usuario;
                if(Usuario === UsuarioCookie) cambiarPermisoPrecio(true);
                
                const Item = 
                    <div className="PaginaItem">

                        <p className="CodigoItem"> { "#" + res.data[0].Codigo } </p>

                        <img alt="Imagen no disponible" className="ImagenItem"src={res.data[0].Img}/> 

                        <p className="RazaItemTexto"> Raza: </p>
                        <p className="RazaItemRaza"> { res.data[0].Raza } </p>

                        <p className="MaterialItemTexto"> Material:</p>
                        <p className="MaterialItemNombre"> { res.data[0].Material } </p>

                        <p className="PrecioItemTexto"> Precio: </p>
                        <p className="PrecioItemNumero"> { res.data[0].Precio } </p>

                        <div className="HistorialPadre">
                            <div className="HistorialTituloPadre">
                                <p className="HistorialTitulo"> Historial de compra </p>
                            </div>
                            <div className="HistorialDatos">
                                <div className="HistorialOldUser">
                                    <p className="NombreHistorial">Seller</p>
                                </div>
                                <div className="HistorialNewUser">
                                    <p className="NombreHistorial">Buyer</p>
                                </div>
                                <div className="HistorialPrice">
                                    <p className="NombreHistorial">Price</p>
                                </div>
                                <div className="HistorialDate">
                                    <p className="NombreHistorial">Date</p>
                                </div>
                                {Historial}
                            </div>
                            
                        </div>

                        <div className="CuadradoUsuarioItem">
                            <p className="CuadradoUsuarioItemTexto">{ Usuario === UsuarioCookie ? "Owned" : Usuario }</p>
                        </div>
                    
                    </div>
                cambiarContenido({MiPagina : Item});
            });
    }

    useEffect(Iniciar,[]);

    return (<>
        {Autenticado === false && <Navigate to="/Login"/>}
        <Header/>
        {Contenido.MiPagina}
        {PermisoPrecio === true && 
            <div className="CambiarPrecio">
            <div className="CambiarPrecioBoton" onClick={ CambiarPrecio }>
                <p className="CambiarPrecioBotonTexto" >Cambiar</p>
            </div> 
            <DivInputFormulario
    
                estado={PrecioConst}
                cambiarEstado={cambiarPrecioConst} 
                type="text"
                placeholder="Cambiar de precio"
                textoerror="Tiene que ser de 1 a 6 digitos."
                expresionRegular={expresiones.Precio}
                className="PrecioTexto"
                precio="true"
            />
            </div>
        }        
        </>);
}