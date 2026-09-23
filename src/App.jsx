import ListaFilmes from './components/ListaFilmes.jsx'

const nomes = ['Ana', 'Bruno', 'Carlos', 'Diana'];

function App() {


  return (
    <div>
      <ul>
        {nomes.map(n => <li key={n}>{n}</li>)}
      </ul>
      <ListaFilmes/>
    </div>
  )
}

export default App
