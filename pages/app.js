import { useState} from 'react';
import '../styles/App.module.css'

function Trocar() {
    const [origem, setOrigem] = useState('Maringá');

    function Troca() {
        setOrigem('São Paulo');
        if(origem === 'São Paulo'){
            setOrigem('Maringá');
        }
    }
    return (
        <div>
            <div>
                <span>{origem}</span>
            </div>
            <button onClick={Troca}>Adicionar</button>
        </div>
    )
}

export default function Cadastro() {
    return (
        <div class="container">
            <span>origem: <Trocar/></span> 
        </div>
    )
}