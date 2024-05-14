import TaskList from "./views/task-list"
import { addTask, getAllTasks } from "./controllers/task-controller"
import { useState } from "react"
import { Task } from "./models/task-model"
import { Button } from "./components/ui/button";
import { Textarea } from "./components/ui/textarea";
import { Input } from "./components/ui/input";

function App() {
  const [tasks, setTasks] = useState<Task[]>(getAllTasks());
  const [newTask, setNewTask] = useState<{ title: string; description: string }>({ title: '', description: '' });

  const handleAddTask = (e: React.FormEvent) => {
    e.preventDefault()
    
    const task = addTask({ title: newTask.title, description: newTask.description });
    if (!task) return;

    setTasks(prevTasks => [...prevTasks, task]); // Atualização do estado usando função de callback
    setNewTask({ title: '', description: '' });
  };

  return (
    <div className="container w-screen h-screen flex flex-col gap-2 p-24 items-center justify-center">
      <TaskList tasks={tasks} />
      <form onSubmit={handleAddTask} className="w-full bg-card p-4 rounded-lg max-w-[800px] mt-3 flex flex-col gap-2">
        <h2 className="font-semibold text-xl">Adicionar nova tarefa 📝</h2>
        <Input
          className="w-full rounded-sm"
          placeholder="Título da tarefa"
          value={newTask?.title}
          onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
        />
        <Textarea
          className="w-full rounded-md"
          placeholder="Descrição da tarefa"
          value={newTask?.description}
          onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
        />
        <Button type="submit" className="w-full rounded-md mt-1">
          Adicionar
        </Button>
      </form>
    </div>
  );
}

export default App;
