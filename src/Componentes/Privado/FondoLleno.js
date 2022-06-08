import React, { useState, useEffect } from 'react';
import { TarjetaItemComp } from './TarjetaItemComp';
import { FondoVacio } from './FondoVacio';
import Axios from 'axios';
export const FondoLleno = () => 
{
	const url = "http://localhost:90/api/dashboard";
	const [Contenido, cambiarContenido] = useState({MiComponente: null});
    var ArregloComponentes = [];

    const Iniciar = () =>
    {
	    Axios.post(url,
	        {
	            Clase: localStorage.getItem("Clase"),
	            Raza: localStorage.getItem("Raza"),
	            Material: localStorage.getItem("Material")
	        })
	        .then(res => 
	        {
	            const Items = res.data;
		        if(Items.length === 0) cambiarContenido({MiComponente : <FondoVacio/>});
		        else
		        {
		        	const Clase = Items[0].Clase;
			        for(var i = 0 ; i < Items.length ; i++)
			        {
			        	const Usuario = Items[i].Usuario === '.' ? "Sin dueño" : Items[i].Usuario;
			        	ArregloComponentes[i] = <TarjetaItemComp 
			        								key={i}
			        								Icono={"http://localhost:3000/Imgs/" + Clase + ".png"}
			        								Codigo={Items[i].Codigo} 
			        								Raza={Items[i].Raza} 
			        								Material={Items[i].Material} 
			        								Img={Items[i].Img} 
			        								Precio={Items[i].Precio}
			        								Usuario={Usuario}
			        							/>
			        }
			        cambiarContenido({MiComponente : ArregloComponentes});
		        }
	        });
	}
	useEffect(Iniciar,[]);
	
	return <div className="d">
			{Contenido.MiComponente}
			</div>
}