import { MensajeErrorDiv, IconoValidacionGeneral, TextoMensaje } from '../../Elementos/Formularios.js';
import { faExclamationTriangle, faCheck } from '@fortawesome/free-solid-svg-icons';
export const MensajeErrorComp = ({Texto, FormValido}) => 
{
	return  <MensajeErrorDiv FormValido={FormValido}>
				<TextoMensaje>
				{FormValido === false && <b>ERROR: </b>}
					<IconoValidacionGeneral
						icon={FormValido === true ? faCheck : faExclamationTriangle} 
                	/>
					{Texto}
				</TextoMensaje>
				
            </MensajeErrorDiv>
}