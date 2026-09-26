import { useState } from 'react';

// Filho
function Tarefa({ aoClicar, nome, feita }) {
    return (
        <>
            <h1>{nome}</h1>
            <p>{feita ? 'Tarefa concluída!' : 'Tarefa pendente'}</p>
            <input type="checkbox" onClick={aoClicar} />
        </>
    );
}

export default Tarefa