import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import Cookies from 'universal-cookie';
import { BotonLoginHeader } from './BotonLoginHeader';
import { BotonSesionHeader } from './BotonSesionHeader';

export const Header = () => 
{
  const cookies = new Cookies();

  const [Logeado, cambiarLogeado] = useState(null);

  //cookies.set("Usuario", "data", {path:"/" });
  //cookies.get("Usuario");
  //cookies.remove("Usuario");
  const Usuario = cookies.get("Usuario");
  
  const CargarPagina = () =>
  {
    
    if(Usuario == undefined)  cambiarLogeado(false);
    else cambiarLogeado(true);
  }

  useEffect(CargarPagina,[]);

  return <header className="Header">
            {Logeado === false && <BotonLoginHeader/>}
            {Logeado === true && <BotonSesionHeader NombreUsuario={Usuario}/>}
         </header>
}