import { useState } from 'react'
import Header from "./components/Header";
import TaskCard from "./components/TaskCard";
import './App.css'
import TaskForm from './components/taskform';

const tarefas = [
  {id:1, titulo: "Estudar React",categoria: "SENAI",prioridade: "alta"},
  {id:2, titulo: "TCC",categoria: "SENAI",prioridade: "alta"},
  {id:3, titulo: "Estudar Flutter",categoria: "SENAI",prioridade: "media"},
  {id:4, titulo: "Estudar",categoria: "SESI",prioridade: "baixa"},
];

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='min-h-screen bg-slate-100'>
      <Header />

      <main className="max-w-4x1 mx-auto px-6 py-10">
        <h2 className="text-xl font-bold text-slate-700 mb-6">Minhas tarefinhas ({tarefas.length})</h2>
        {tarefas.map((tarefa) => (
          <TaskCard
            key={tarefa.id}
            titulo={tarefa.titulo}
            categoria={tarefa.categoria}
            prioridade={tarefa.prioridade} 
          />
        ))}
        <section className="grid gap-4 sm:grid-cols-2">
          <TaskForm />
        </section>
      </main>
    </div>
   
    
  )
}

export default App
