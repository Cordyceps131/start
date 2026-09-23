import {useState} from 'react';

function Contador() {
    const [contador, setContador] = useState(0);

    return (
        <>

            <h1>{contador}</h1>
            <section>
                <button onClick={() => contador > 0 && setContador(contador - 1)}>-</button>&nbsp;
                <button onClick={() => setContador(0)}>0</button>&nbsp;
                <button onClick={() => setContador(contador + 1)}>+</button>
            </section><br />
        </>
    )
};

export default Contador;