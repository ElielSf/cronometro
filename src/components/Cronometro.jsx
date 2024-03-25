import { useEffect, useState } from 'react'
import '../css/Cronometro.css'

export default function Cronometro() {
    const [contador, setContador] = useState(10);
    const [iniciarContador, setIniciarContador] = useState(false);

    const [valorEscolhido, setValorEscolhido] = useState(''); // Estado para armazenar o valor escolhido pelo usuário

    const handleValorChange = (event) => {
        setValorEscolhido(event.target.value);
    };

    const iniciarContador = () => {
        const valorNumerico = parseInt(valorEscolhido, 10); // Converte o valor para número
        if (!isNaN(valorNumerico)) {
            setContador(valorNumerico);
        }

    useEffect(() => {
        if (iniciarContador && contador > 0){
            const idInterval = setInterval(() => {
                setContador(contador => contador - 1);
            }, 1000);

            return () => clearInterval(idInterval);
        }
    }, [iniciarContador, contador])

    const iniciarContagem = () => {
        setIniciarContador(true);
    }

    return (
        <div content='contentCronometro'>
            <div content='wrapper__contador'>
                <h1>Contador: {contador}</h1>
            </div>
            <input className='wrapper__tempo' onChange={handleValorChange} type="time"/>
            <button onClick={iniciarContagem} className='wrapper__botao'>Iniciar</button>

        </div>
    )
}