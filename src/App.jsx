import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [contador, setContador] = useState(0);
  const [nome, setNome] = useState('');



  return (
    <div>
      <h1>{contador}</h1>
      <section>
        <button onClick={() => contador > 0 && setContador(contador - 1)}>-</button>&nbsp;
        <button onClick={() => setContador(0)}>0</button>&nbsp;
        <button onClick={() => setContador(contador + 1)}>+</button>
      </section><br />
      <input type="text" placeholder="Quem fez quem foi? 😃" value={nome} onChange={(e) => setNome(e.target.value)} />
      <h5>FEITO POR {nome}!! 🦾</h5>
      <button onClick={() => setNome('')}>Reset</button>
    </div>
  )
}

export default App
