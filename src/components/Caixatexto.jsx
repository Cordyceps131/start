import { useState } from 'react';

function CaixaTexto() {
    const [input, setInput] = useState('');
    return (
        <>
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
            <p>Foram digitados {input.length} caracteres</p>
        </>
    )
}

export default CaixaTexto;