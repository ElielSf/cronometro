import { useState, useEffect } from 'react'
import '../css/Cronometro.css'

export default function Cronometro() {
    const [contador, setContador] = useState(0);
    const [contadorAtivo, setContadorAtivo] = useState(false);
    const [limparContador, setLimparContador] = useState(false);

    useEffect(() => {
        let timer;

        if (limparContador) {
            setContador(0);
            setLimparContador(false);
            setContadorAtivo(false);
            return;
        }

        if (contadorAtivo) {
            timer = setInterval(() => {
                setContador((contador) => contador + 1);
            }, 1000);

            return () => clearTimeout(timer);
        } else {
            return;
        }        
    }, [contadorAtivo, limparContador]);

    const iniciarCronometro = () => {
        setContadorAtivo(!contadorAtivo);
    };  

    const limparCronometro = () => {
        setLimparContador(true);
    };
    
    return (
        <div className='Cronometro'>
            <div className='Cronometro__card'>
                <h1 className='Cronometro__title'>Contador: {contador}</h1>
                <button className={contadorAtivo ? 'Cronometro__button--activated' : 'Cronometro__button--desactivated'} onClick={iniciarCronometro}>{contadorAtivo ? 'Pausar Cronometro' : 'Iniciar cronometro'}</button>
                <button className='Cronometro__button--clear' onClick={limparCronometro}>Limpar cronometro</button>
            </div>  
        </div>
    )
}