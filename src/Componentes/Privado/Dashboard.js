import React, { useState, useEffect } from 'react';
import { TarjetaItemComp } from './TarjetaItemComp';
import { FondoVacio } from './FondoVacio';
import { FondoLleno } from './FondoLleno';
import { ClaseOpcionComp } from './ClaseOpcionComp';
import { Header } from '../Header/Header';
import { Navigate } from "react-router-dom";
import Cookies from 'universal-cookie';

export const Dashboard = () => 
{
    const [Vacio, cambiarVacio] = useState(null);
    const cookies = new Cookies();
    const [Autenticado, cambiarAutenticado] = useState(true);
    const Usuario = cookies.get("Usuario");

    const Iniciar = () =>
    {
        if(Usuario === undefined) cambiarAutenticado(false);
        localStorage.setItem("Clase", ".");
        localStorage.setItem("Raza", ".");
        localStorage.setItem("Material", ".");
    }

    useEffect(Iniciar,[]);

    const [ActivaClase, cambiarActivaClase] = useState(false);
    const [ActivaRaza, cambiarActivaRaza] = useState(false);
    const [ActivaMaterial, cambiarActivaMaterial] = useState(false);

    const MandarClase = (Nombre) =>
    {
        localStorage.setItem("Clase", Nombre);
        handleCambiarBusqueda(Nombre);
    }
    const MandarRaza = (Nombre) =>
    {
        localStorage.setItem("Raza", Nombre);
        handleCambiarBusqueda(Nombre);
    }

    const MandarMaterial = (Nombre) =>
    {
        localStorage.setItem("Material", Nombre);
        handleCambiarBusqueda(Nombre);
    }

    const handleCambiarBusqueda = async (Nombre) =>
    {
        if(Vacio) cambiarVacio(false);
        else cambiarVacio(true);
    }

    return  (<>
        {Autenticado === false && <Navigate to="/Login"/>}
        <Header/>
        <div>
            <div className="Filtros">
                <div className="FiltroTitulo">
                    <p className="TituloFiltro">Filtros</p>
                    <p className="TituloReset" onClick = { () => window.location.reload() } >Reset</p>
                </div>
                <div className="ClaseFiltro">
                    <h6 className="TituloFiltro">Clase</h6>
                    <ClaseOpcionComp BuscarClase={MandarClase} NombreRadioInput="Clase" Img= "http://localhost:3000/Imgs/Casco.png" NombreEnviado="Casco"/>
                    <ClaseOpcionComp BuscarClase={MandarClase} NombreRadioInput="Clase" Img= "http://localhost:3000/Imgs/Collar.png" NombreEnviado="Collar"/>
                    <ClaseOpcionComp BuscarClase={MandarClase} NombreRadioInput="Clase" Img= "http://localhost:3000/Imgs/Capa.png" NombreEnviado="Capa"/>
                    <ClaseOpcionComp BuscarClase={MandarClase} NombreRadioInput="Clase" Img= "http://localhost:3000/Imgs/Pecho.png" NombreEnviado="Pecho"/>
                    <ClaseOpcionComp BuscarClase={MandarClase} NombreRadioInput="Clase" Img= "http://localhost:3000/Imgs/Cinturon.png" NombreEnviado="Cinturon"/>
                    <ClaseOpcionComp BuscarClase={MandarClase} NombreRadioInput="Clase" Img= "http://localhost:3000/Imgs/Pantalones.png" NombreEnviado="Pantalones"/>
                    <ClaseOpcionComp BuscarClase={MandarClase} NombreRadioInput="Clase" Img= "http://localhost:3000/Imgs/Anillo.png" NombreEnviado="Anillo"/>
                    <ClaseOpcionComp BuscarClase={MandarClase} NombreRadioInput="Clase" Img= "http://localhost:3000/Imgs/Gema.png" NombreEnviado="Gema"/>
                </div>
                <div className="RazaFiltro">
                    <h6 className="TituloFiltro">Raza</h6>
                    <ClaseOpcionComp BuscarRaza={MandarRaza} NombreRadioInput="Raza" Img="http://localhost:3000/Imgs/Casco.png" NombreEnviado="Hundi"/>
                    <ClaseOpcionComp BuscarRaza={MandarRaza} NombreRadioInput="Raza" Img="http://localhost:3000/Imgs/Collar.png" NombreEnviado="Tuco"/>
                    <ClaseOpcionComp BuscarRaza={MandarRaza} NombreRadioInput="Raza" Img="http://localhost:3000/Imgs/Capa.png" NombreEnviado="Mexa"/>
                    <ClaseOpcionComp BuscarRaza={MandarRaza} NombreRadioInput="Raza" Img="http://localhost:3000/Imgs/Pecho.png" NombreEnviado="Volto"/>
                    <ClaseOpcionComp BuscarRaza={MandarRaza} NombreRadioInput="Raza" Img="http://localhost:3000/Imgs/Cinturon.png" NombreEnviado="Zeka"/>
                    <ClaseOpcionComp BuscarRaza={MandarRaza} NombreRadioInput="Raza" Img="http://localhost:3000/Imgs/Pantalones.png" NombreEnviado="Mongo"/>
                    <ClaseOpcionComp BuscarRaza={MandarRaza} NombreRadioInput="Raza" Img="http://localhost:3000/Imgs/Anillo.png" NombreEnviado="Ruma"/>
                </div>
                <div className="MaterialFiltro">
                    <h6 className="TituloFiltro">Material</h6>
                    <ClaseOpcionComp BuscarMaterial={MandarMaterial} NombreRadioInput="Material" Img="http://localhost:3000/Imgs/Casco.png" NombreEnviado="Adamantium"/>
                    <ClaseOpcionComp BuscarMaterial={MandarMaterial} NombreRadioInput="Material" Img="http://localhost:3000/Imgs/Collar.png" NombreEnviado="Diamante"/>
                    <ClaseOpcionComp BuscarMaterial={MandarMaterial} NombreRadioInput="Material" Img="http://localhost:3000/Imgs/Capa.png" NombreEnviado="Hierro"/>
                    <ClaseOpcionComp BuscarMaterial={MandarMaterial} NombreRadioInput="Material" Img="http://localhost:3000/Imgs/Pecho.png" NombreEnviado="Oro"/>
                    <ClaseOpcionComp BuscarMaterial={MandarMaterial} NombreRadioInput="Material" Img="http://localhost:3000/Imgs/Cinturon.png" NombreEnviado="Mallas"/>
                    <ClaseOpcionComp BuscarMaterial={MandarMaterial} NombreRadioInput="Material" Img="http://localhost:3000/Imgs/Pantalones.png" NombreEnviado="Cuero"/>
                    <ClaseOpcionComp BuscarMaterial={MandarMaterial} NombreRadioInput="Material" Img="http://localhost:3000/Imgs/Anillo.png" NombreEnviado="Platino"/>
                </div>
            </div>
            <div className="ItemsContenedor">
                {Vacio === null && <FondoVacio/>}
                {Vacio === false && <FondoLleno/>}
                {Vacio === true && <FondoLleno/>}                           
            </div>   
        </div>
    </>)
}