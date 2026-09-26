import { useState, useEffect } from 'react';
import Cartao from './Cartao.jsx'

function ListaFilmes() {
    const [filtro, setFiltro] = useState(false);

    useEffect(() => {
        alert('INICIEI!')
    }, []);
    const filmes = [
        { id: 1, titulo: 'Batman', ano: 2005 },
        { id: 2, titulo: 'Matrix', ano: 1999 },
        { id: 3, titulo: 'Avatar', ano: 2009 },
    ];
    return (<>
        <button onClick={() => setFiltro(!filtro)}>{!filtro ? 'Mostrar só filmes depois de 2000' : 'Mostrar Todos'}</button>
        {filmes.filter(f => !filtro || f.ano > 2000).map(f => <Cartao key={f.id} titulo={f.titulo} ano={f.ano} />)}
    </>)
}

export default ListaFilmes;