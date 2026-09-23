import Cartao from './Cartao.jsx'
function ListaFilmes() {
    const filmes = [
        { id: 1, titulo: 'Batman', ano: 2005 },
        { id: 2, titulo: 'Matrix', ano: 1999 },
        { id: 3, titulo: 'Avatar', ano: 2009 },
    ];
    return (<>
        {filmes.map(f => <Cartao key={f.id} titulo={f.titulo} ano={f.ano}/>)}
    </>)
}

export default ListaFilmes;