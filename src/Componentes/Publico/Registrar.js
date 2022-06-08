import React, { useState, useEffect } from 'react';
import { Link, Navigate } from "react-router-dom";
import Axios from 'axios';
import { Formulario, ContenedorTerminos, Label, InputTerminos, SubmitForm } from '../../Elementos/Formularios.js';
import { DivInputFormulario } from './DivInputFormulario';
import { MensajeErrorComp } from './MensajeErrorComp';
import { Header } from '../Header/Header';
import Cookies from 'universal-cookie';

export const Registrar = () => 
{

    const cookies = new Cookies();

    const [Autenticado, cambiarAutenticado] = useState(false);
    
    const RutasPrivadas = () =>
    {
        if(cookies.get("Usuario") === undefined) cambiarAutenticado(false);
        else cambiarAutenticado(true);
    }

    useEffect(RutasPrivadas,[]);

    const [Usuario, cambiarUsuario] = useState({campo: '', valido: null});
    const [Email, cambiarEmail] = useState({campo: '', valido: null});
    const [Password, cambiarPassword] = useState({campo: '', valido: null});
    const [Password2, cambiarPassword2] = useState({campo: '', valido: null});
    const [terminos, cambiarTerminos] = useState(false);
    const [formularioValido, cambiarFormularioValido] = useState(null);
    const [Bandera0, cambiarBandera0] = useState(null);
    const [Bandera1, cambiarBandera1] = useState(null);
    const [Bandera2, cambiarBandera2] = useState(null);
    const [Bandera3, cambiarBandera3] = useState(null);    

    const expresiones = 
    {
        Usuario: /^[a-zA-Z0-9_-]{4,18}$/,
        Password: /^.{4,14}$/,
        Email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
    }

    const validarPassword2 = () => 
    {
        if(Password.campo.length > 0 || Password2.campo.length)
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
        }
    }

    const onChangeTerminos = (e) => cambiarTerminos(e.target.checked);

    const url = "http://localhost:90/api/usuarios";

    const onSubmit = (e) => 
    {
        e.preventDefault();
        
        if(Usuario.valido === 'true' && Password.valido === 'true' && Password2.valido === 'true' && Email.valido === 'true' && terminos)
        {
            Axios.post(url, 
            {
                Usuario: Usuario.campo,
                Email: Email.campo,
                Password: Password.campo
            }).then(res=>
            {
                VerificarRegistro(res.data);
            });
        }
    }

    function VerificarRegistro(data)
    {
        if(data === "Usuario Email Repetido") 
        {
            cambiarFormularioValido(false);
            cambiarBandera3(true); 
            cambiarBandera0(false); 
            cambiarBandera1(false); 
            cambiarBandera2(false);
        }
        else if(data === "Usuario Repetido")
        {
            cambiarFormularioValido(false);
            cambiarBandera2(true); 
            cambiarBandera3(false); 
            cambiarBandera0(false); 
            cambiarBandera1(false);
        }
        else if(data === "Email Repetido")
        {
            cambiarFormularioValido(false);
            cambiarBandera1(true); 
            cambiarBandera2(false); 
            cambiarBandera3(false); 
            cambiarBandera0(false);
        }
        else if(data === "No Repetido")
        {
            cambiarFormularioValido(true);
            cambiarBandera0(true); cambiarBandera1(false); cambiarBandera2(false); cambiarBandera3(false);
            cambiarUsuario({campo: '', valido: ''});
            cambiarPassword({campo: '', valido: null});
            cambiarPassword2({campo: '', valido: 'null'});
            cambiarEmail({campo: '', valido: null});
        }
    }



	return  (<>
            {Autenticado === true && <Navigate to="/Dashboard"/>}
            <Header/>
            <Formulario onSubmit={onSubmit}>
                {(formularioValido !== null && Bandera0 === true) && <MensajeErrorComp FormValido={formularioValido} Texto="Tu cuenta fue registrada exitosamente!" />}
                {(formularioValido !== null && Bandera1 === true) && <MensajeErrorComp FormValido={formularioValido} Texto="Este email ya esta en uso." />}
                {(formularioValido !== null && Bandera2 === true) && <MensajeErrorComp FormValido={formularioValido} Texto="Este usuario ya esta en uso." />}
                {(formularioValido !== null && Bandera3 === true) && <MensajeErrorComp FormValido={formularioValido} Texto="Este email y usuario ya existen." />}
                <p className="Form__Titulo FTRegistrar">Crear cuenta</p>
                <DivInputFormulario
                    estado={Usuario}
                    cambiarEstado={cambiarUsuario} 
                    type="text"
                    name="Nombre"
                    placeholder="Nombre de usuario"
                    textoerror="El usuario tiene que ser de 5 a 18 digitos."
                    expresionRegular={expresiones.Usuario}
                />
                <DivInputFormulario
                    estado={Email}
                    cambiarEstado={cambiarEmail} 
                    type="text"
                    name="Email"
                    placeholder="Escribe tu email"
                    textoerror="Introduce un email valido."
                    expresionRegular={expresiones.Email}
                />
                <DivInputFormulario
                    estado={Password}
                    cambiarEstado={cambiarPassword} 
                    type="password"
                    name="Password"
                    placeholder="Contraseña"
                    textoerror="La contraseña debe ser de 4 a 14 digitos."
                    expresionRegular={expresiones.Password}
                />
                <DivInputFormulario
                    estado={Password2}
                    cambiarEstado={cambiarPassword2} 
                    type="password"
                    name="Password2"
                    placeholder="Repite tu Contraseña"
                    textoerror="Ambas Contraseñas deben ser iguales."
                    funcion={validarPassword2}
                />
                <ContenedorTerminos>
                    <Label>
                        <InputTerminos 
                            type="checkbox"
                            name="terminos"
                            id="terminos"
                            checked={terminos} 
                            onChange={onChangeTerminos}
                        />
                        Acepto los Terminos y Condiciones
                    </Label>
                </ContenedorTerminos>
                <SubmitForm  type="submit" value="Registrarse"/>
                <Link to="/Login" className="TextoInput TIRegistrar">¿Ya tienes cuenta?</Link>
            </Formulario>
            </>)
}