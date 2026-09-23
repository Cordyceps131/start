import ListaFilmes from './components/ListaFilmes.jsx'

function App() {
  const nomes = ['Ana', 'Bruno', 'Carlos', 'Diana'];


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
