import React from 'react';
import { InputForm, DivInput, TextoError, IconoValidacion } from '../../Elementos/Formularios.js';
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons'

export const DivInputFormulario = ({estado, cambiarEstado, type, name, placeholder, textoerror, expresionRegular, funcion, precio}) => 
{
	const onChange = (e) =>
    {
        cambiarEstado({...estado, campo: e.target.value});
    }

    const Validacion = () =>
    {
    	if(expresionRegular)
    	{ 
    		if(expresionRegular.test(estado.campo))
    		{
    			cambiarEstado({...estado, valido: 'true'});
    		}
    		else
    		{
    			cambiarEstado({...estado, valido: 'false'});
    		}
    	}
    	if(funcion)
    	{
    		funcion();
    	}
    }
/*
    const Historial = 

                
                cambiarMostrarHistorial({MiHistorial: Historial});*/
	return  <DivInput precio={precio}>
                <InputForm
                	type={type} 
                	placeholder={placeholder}
	                name={name}  
	              	value={estado.campo} 
	                onChange={onChange} 
	                onKeyUp={Validacion}
	                onBlur={Validacion}
	                valido={estado.valido}
	                precio={precio}
	                />
                <IconoValidacion 
                	icon={estado.valido === 'true' ? faCheckCircle : faTimesCircle} 
                	valido={estado.valido}
                	precio={precio}
                />
                <TextoError valido={estado.valido} >{textoerror}</TextoError>
            </DivInput>
}