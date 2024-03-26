import { useState } from 'react'
import '../css/Cronometro.css'

export default function Cronometro() {
    const [contador, setContador] = useState(0);
    const [contadorAtivo, setContadorAtivo] = useState(false);
    const [intervalId, setIntervalId] = useState(null);

    const iniciarCronometro = () => {
        if (contadorAtivo) {
            clearInterval(intervalId);
            setContadorAtivo(false);
        } else {
            const idInterval = setInterval(() => {
                setContador((contador) => contador + 1);
            }, 1000);
            setIntervalId(idInterval);
            setContadorAtivo(true);
        }
    }

    const limparContador = () => {
        setContador(0);
    }

    return (
        <div content='contentCronometro'>
            <div content='wrapper__contador'>
                <h1>Contador: {contador}</h1>
            </div>
            <button onClick={iniciarCronometro}>Iniciar cronometro</button>
            <button onClick={limparContador}>Limpar cronometro</button>
        </div>
    )
}