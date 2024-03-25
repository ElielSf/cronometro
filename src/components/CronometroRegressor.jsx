import { useEffect, useState } from 'react'
import '../css/CronometroRegressor.css'

export default function CronometroRegressor() {
    const [contador, setContador] = useState(0);
    const [iniciarContador, setIniciarContador] = useState(false);
    const cliqueBotao = 'Iniciar';

    useEffect(() => {
        if (iniciarContador && contador > 0){
            
        }
    })

    Iniciar = () => {
        setIniciarContador(true);
    }

    return (
        <div content='contentCronometro'>
            <div content='wrapper__contador'>
                {!iniciarContador && (contador)}
            </div>
            <input className='wrapper__tempo' type="time"/>
            <button onClick={Iniciar} className='wrapper__botao'>{cliqueBotao}</button>

        </div>
    )
}