import { Link, Navigate } from 'react-router-dom';
import { useState } from 'react';
import { AbrirLoginBoton } from '../../Elementos/Formularios.js';
import Cookies from 'universal-cookie';

export const BotonSesionHeader = ({NombreUsuario}) => 
{
  const [ActivoMenu, cambiarActivoMenu] = useState(false);
  const [RemoverUsuario, cambiarRemoverUsuario] = useState(false);

  const cookies = new Cookies();
  
  const ActivarMenu = () =>
  {
    if(ActivoMenu) cambiarActivoMenu(false);
    else cambiarActivoMenu(true);
  }

  const CerrarSesion = () =>
  {
    cookies.remove("Usuario");
    cambiarRemoverUsuario(true);
  }

  return <div>
            {RemoverUsuario === true && <Navigate to="/Login"/>}
            <div onClick={ActivarMenu} className="LoginBoton">
              <p className="TextoBotonLogin">{NombreUsuario}</p>
            </div>
            <AbrirLoginBoton onClick={CerrarSesion} className="AbrirLoginBoton" Estado={ActivoMenu}>
              <p className="TextoBotonAbrirLogin">Cerrar sesion</p>
            </AbrirLoginBoton>
          </div>
}