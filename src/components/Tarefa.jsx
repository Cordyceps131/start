import { useState } from 'react';

// Filho
function Tarefa({ check, apagar, nome, feita }) {
    return (
        <>
            <h1>{nome}</h1>
            <p>{feita ? 'Tarefa concluída!' : 'Tarefa pendente'}</p>
            <input type="checkbox" onClick={check} />
            <button onClick={apagar}>Apagar</button>
        </>
    );
}

export default Tarefa