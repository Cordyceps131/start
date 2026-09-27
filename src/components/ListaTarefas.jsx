import { useEffect, useState } from 'react';
import Tarefa from './Tarefa.jsx';

// Pai
function ListaTarefas() {
    const [input, setInput] = useState('');
    const [tarefas, setTarefas] = useState(() => {
        const storage = localStorage.getItem('tarefas');
        return storage ? JSON.parse(storage) : [];
    });

    useEffect(() => {
        localStorage.setItem('tarefas', JSON.stringify(tarefas));
    }, [tarefas]);

    function marcarComoFeita(id) {
        const novoArray = tarefas.map(t => t.id === id ? { ...t, feita: !t.feita } : t)
        setTarefas(novoArray);
    }

    function adicionarTarefa(e) {
        e.preventDefault();
        if (input.trim() === '') {
            return;
        }
        const proximoId = tarefas.length > 0 ? Math.max(...tarefas.map(t => t.id)) + 1 : 1;
        const tarefa = { id: proximoId, nome: input, feita: false };
        setTarefas([...tarefas, tarefa]);
        setInput('');
    }

    function apagarTarefa(id) {
        const novoArray = tarefas.filter(t => t.id !== id)
        setTarefas(novoArray);
    }



    return (
        <>
            <form onSubmit={adicionarTarefa}>
                <input type="text" placeholder="Inserir tarefa..." value={input} onChange={(e) => setInput(e.target.value)} />
                <button type="submit">Adicionar</button>
            </form>
            {tarefas.map(t => <Tarefa key={t.id} nome={t.nome} feita={t.feita} check={() => marcarComoFeita(t.id)} apagar={() => apagarTarefa(t.id)}/>)}
        </>
    )
}

export default ListaTarefas;