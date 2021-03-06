import React, { useState } from 'react';
import { Navigate } from "react-router-dom";
import Axios from 'axios';
import { Formulario, SubmitForm } from '../../Elementos/Formularios.js';
import { DivInputFormulario } from './DivInputFormulario';

export const RecuperarPassword = () => 
{
    const [Recuperada, cambiarRecuperada] = useState(false);
    const [Expresiones, cambiarExpresiones] = useState(null);
    const [Password, cambiarPassword] = useState({campo: '', valido: null});
    const [Password2, cambiarPassword2] = useState({campo: '', valido: null});

    const validarPassword = () => 
    {
        if(Password.campo.length > 0 || Password2.campo.length > 0)
        {
            if(Password2.campo !== Password.campo)
            {
                cambiarPassword((prevState) => 
                {
                    return {...prevState, valido: 'false'}
                });
                cambiarPassword2((prevState) => 
                {
                    return {...prevState, valido: 'false'}
                });
            } 
            else 
            {
                cambiarPassword((prevState) => 
                {
                    return {...prevState, valido: 'true'}
                });
                cambiarPassword2((prevState) => 
                {
                    return {...prevState, valido: 'true'}
                });
            }
            if(Password.campo.length < 4 || Password.campo.length > 14 || Password2.campo.length < 4 || Password2.campo.length > 14)
            {
                cambiarExpresiones(false)
                cambiarPassword((prevState) => 
                {
                    return {...prevState, valido: 'false'}
                });
                cambiarPassword2((prevState) => 
                {
                    return {...prevState, valido: 'false'}
                });
            }
            else cambiarExpresiones(true);
        }
    }


    const onSubmit = (e) => 
    {
        e.preventDefault();
        if(Password2.valido === 'true') cambiarRecuperada(true);
        //Actualizar base de datos con la nueva contrase??a
    } 

	return  <Formulario onSubmit={onSubmit}>
                {Recuperada === true && <Navigate to="/Login"/>}
                <p className="Form__Titulo">Recuperar</p>
                <DivInputFormulario
                    estado={Password}
                    cambiarEstado={cambiarPassword} 
                    type="password"
                    name="Password"
                    placeholder="Contrase??a"
                    textoerror={Expresiones ? "" : "La contrase??a debe ser de 4 a 14 digitos."}
                    funcion={validarPassword}
                />
                <DivInputFormulario
                    estado={Password2}
                    cambiarEstado={cambiarPassword2} 
                    type="password"
                    name="Password2"
                    placeholder="Repite tu Contrase??a"
                    textoerror="Ambas Contrase??as deben ser iguales."
                    funcion={validarPassword}
                />
                <p className="TextoRecuperarVerificar">Escribe tu nueva contrase??a.</p>
                <SubmitForm className="Form__InputSubmit" type="submit" value="Recuperar"/>
            </Formulario>
}