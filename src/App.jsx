// import Saudacao from './components/Saudacao.jsx'
// import './App.css'
// import Contador from './components/Contador.jsx';
// import Cartao from './components/Cartao.jsx';
import ListaFilmes from './components/ListaFilmes.jsx'

function App() {
  const nomes = ['Ana', 'Bruno', 'Carlos', 'Diana'];


  return (
    <div>
      <ul>
        {nomes.map(n => <li key={n}>{n}</li>)}
      </ul>
      <ListaFilmes/>
      {/* <Contador />
      <Contador />
      <Saudacao nome='André' />
      <Saudacao nome='Pedro' />
      <Saudacao nome='Tiago' />
      <Cartao titulo='Batman' ano='1999' />
      <Cartao titulo='Avatar' ano='2020' /> */}
    </div>
  )
}

export default App
