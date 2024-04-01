import { useEffect, useState } from 'react'
import '../css/Temporizador.css'

export default function Temporizador() {
    const [ativo, setAtivo] = useState(false);
    const [tempoRestante, setTempoRestante] = useState(null);

    useEffect(() => {
        let intervalId;
        
        if (ativo && tempoRestante > 0) {
            intervalId = setInterval(() => {
                setTempoRestante(tempoRestante - 1);
            }, 1000);
        } 

        return () => clearInterval(intervalId);
    }, [ativo, tempoRestante]);

    const iniciarTemporizador = () => {
        const valorInputTemporizador = document.querySelector('input[name="temporizador"]').value;
        if(valorInputTemporizador) {
            const segundos = converterTempoParaSegundos(valorInputTemporizador);
            setTempoRestante(segundos);
            setAtivo(true);
        }
    };

    const limparTemporizador = () => {
        setTempoRestante(0);
    };

    const converterTempoParaSegundos = (tempo) => {
        const [horas, minutos, segundos] = tempo.split(':');
        return parseInt(horas) * 3600 + parseInt(minutos) * 60 + parseInt(segundos);
    };

    return (
        <div className='Temporizador'>
            <div className='Temporizador__card'>
                <h1 className='Temporizador__title'>{(tempoRestante > 0) ? (`Tempo restante: ${tempoRestante}s`) : ''}</h1>
                <label className='Temporizador__label' for='temporizador'>Escolha o tempo para o temporizador: </label>
                <input className='Temporizador__input' type='time' step='2' name='temporizador' required/>
                <button className='Temporizador__button--activated' onClick={iniciarTemporizador} >Iniciar Temporizador</button>
                <button className='Temporizador__button--clear' onClick={limparTemporizador} >Limpar Temporizador</button>
            </div>
        </div>
    )
}