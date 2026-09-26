import { useState, useEffect } from 'react';

function Piadas() {
    const [piada, setPiada] = useState();
    const [aCarregar, setACarregar] = useState(false);
    const [msg, setMsg] = useState('');


    const buscarPiada = async () => {
        setACarregar(true);
        setMsg('');
        setPiada();
        try {
            const resposta = await fetch('https://official-joke-api.appspot.com/random_jok');
            if (!resposta.ok) {
                throw new Error(`ERRO HTTP: ${resposta.status}`);
            }
            const dados = await resposta.json();
            console.log(dados)
            setPiada(dados)
        } catch (error) {
            setMsg(`${error}`)

        } finally {
            setACarregar(false);
        }
    }

    useEffect(() => {
        buscarPiada();

    }, []);

    return (
        <>
            {aCarregar && <p>A Carregar...</p>}
            {msg && <p>{msg}</p>}
            {piada && <>
                <p>Setup: {piada.setup}</p>
                <p>Punchline: {piada.punchline}</p>
            </>}
            <button onClick={buscarPiada}>Nova</button>
        </>
    )
}

export default Piadas;