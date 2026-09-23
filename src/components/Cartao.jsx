import {useState} from 'react';

function Cartao({ titulo, ano }) {
    const [gostos, setGostos] = useState(0);

    return (
        <>
            <h3>Título: {titulo}</h3>
            <p>Ano: {ano}</p>
            <button onClick={() => setGostos(gostos + 1)}>{gostos} Likes ❤️</button>
        </>
    )
}
export default Cartao;