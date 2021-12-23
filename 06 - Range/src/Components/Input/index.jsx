import { StyledInput } from './styles'

export default function Input({setNumero}){

    const handleChange = (e) => {
        const pesos = e.target.value / 100;
        setNumero(pesos);
    }

    return(
        <label>
            <StyledInput onChange={handleChange} type='range' min='0' max='10000'/>
        </label>
    )
}