import React from 'react';
import { ClaseOpcion } from '../../Elementos/Formularios.js';

export const ClaseOpcionComp = ({ Img, NombreEnviado, NombreRadioInput, BuscarClase, BuscarRaza, BuscarMaterial }) => 
{   
    const Elegir = () =>
    {
        if(BuscarClase) BuscarClase(NombreEnviado);
        if(BuscarRaza) BuscarRaza(NombreEnviado);
        if(BuscarMaterial) BuscarMaterial(NombreEnviado);
    }

    return  <ClaseOpcion>
                <img className="ImgClase" src={ Img }/>
                <input className="InputFiltros" onChange = { e => Elegir() } type="radio" name={ NombreRadioInput }/>
                <h6 className="NombreClase">{ NombreEnviado }</h6>
            </ClaseOpcion>
}