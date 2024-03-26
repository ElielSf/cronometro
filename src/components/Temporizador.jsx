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
    }

    const converterTempoParaSegundos = (tempo) => {
        const [horas, minutos, segundos] = tempo.split(':');
        return parseInt(horas) * 3600 + parseInt(minutos) * 60 + parseInt(segundos);
    };

    return (
        <div content='contentTemporizador'>
            <div content='wrapper__temporizador'>
                <h1>Tempo restante: {tempoRestante}</h1>
            </div>
            <label for='temporizador'>Escolha o tempo para o temporizador: </label>
            <input type='time' step='2' name='temporizador' min='00:00:01' required/>
            <button onClick={iniciarTemporizador} >Iniciar Temporizador</button>
        </div>
    )
}