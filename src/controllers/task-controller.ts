// No controller task-controller.ts

import { Task } from '../models/task-model';
import { v4 as uuidv4 } from 'uuid';

const tasks: Task[] = [
  {
    id: uuidv4(),
    title: 'Fazer compras de supermercado',
    description: 'Comprar itens como leite, pão, frutas e legumes.',
    completed: false
  },
  // Adicione as demais tasks aqui...
];

export const getAllTasks = (): Task[] => {
  return tasks;
};

export const addTask = ({ title, description = '' }: { title: string; description?: string }): Task | null => {
  if (!title.trim()) {
    alert('O título da tarefa é obrigatório.');
    return null;
  }

  const id = uuidv4(); // Gerar um ID único para a nova task

  const newTask: Task = { id, title, description, completed: false };

  tasks.push(newTask);
  console.log(tasks)
  return newTask;
};
