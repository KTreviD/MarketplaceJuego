import React, { useState, useEffect } from 'react';
import { Link, Navigate } from "react-router-dom";
import Axios from 'axios';
import { Formulario, SubmitForm } from '../../Elementos/Formularios.js';
import { DivInputFormulario } from './DivInputFormulario';
import { MensajeErrorComp } from './MensajeErrorComp';
import { Header } from '../Header/Header';
import Cookies from 'universal-cookie';

export const Login = () => 
{
    const cookies = new Cookies();

    const [Autenticado, cambiarAutenticado] = useState(false);
    const Usuario = cookies.get("Usuario");

    const RutasPrivadas = () =>
    {
        if(Usuario == undefined) cambiarAutenticado(false);
        else cambiarAutenticado(true);
    }

    useEffect(RutasPrivadas,[]);

	const [Email, cambiarEmail] = useState({campo: '', valido: null});
    const [Password, cambiarPassword] = useState({campo: '', valido: null});
    const [Bandera0, cambiarBandera0] = useState(null);
    const [Bandera1, cambiarBandera1] = useState(null);
    const [Dashboard, cambiarDashboard] = useState(null);
    const url = "http://localhost:90/api/login";

    const onSubmit = (e) => 
    {
        e.preventDefault();
        Axios.post(url,
        {
            Email: Email.campo,
            Password: Password.campo
        }).then(res=>
        {
            VerificarLogin(res.data);
        });
    } 

    function VerificarLogin(data)
    {
        if(data === "Mala password") 
        {
            cambiarBandera0(false); 
            cambiarBandera1(true);
        }
        else if(data === "Mal email")
        {
            cambiarBandera1(false); 
            cambiarBandera0(true);
        }
        else
        {
            cookies.set("Usuario", data, {path:"/" });
            cambiarDashboard(true);
        }
    }

	return  (<>
            {Autenticado === true && <Navigate to="/Dashboard"/>}
            <Header/>
            <Formulario onSubmit={onSubmit}>
                {Dashboard === true && <Navigate to="/Dashboard"/>}
                {Bandera0 === false && <MensajeErrorComp FormValido={Bandera0} Texto="La contraseña esta incorrecta." />}
                {Bandera1 === false && <MensajeErrorComp FormValido={Bandera1} Texto="Este email no existe." />}
                <p className="Form__Titulo">Login</p>
                <DivInputFormulario
                    estado={Email}
                    cambiarEstado={cambiarEmail} 
                    type="text"
                    name="Email"
                    placeholder="Escribe tu email"
                />
                <DivInputFormulario
                    estado={Password}
                    cambiarEstado={cambiarPassword} 
                    type="password"
                    name="Password"
                    placeholder="Contraseña"
                />
                <Link to="/OlvidarPassword" className="TextoInput PedirEmail" type="submit" value="REGISTRARME">¿Olvidaste tu contraseña?</Link>
                <SubmitForm className="Form__InputSubmit" type="submit" value="LOGEAME"/>
                <Link to="/Registrar" className="TextoInput" type="submit" value="REGISTRARME">¿Aun no tienes cuenta?</Link>
            </Formulario>
            </>)
}
