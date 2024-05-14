import TaskComponent from '../components/task-component';
import { Task } from '../models/task-model';
import { v4 as uuidv4 } from 'uuid';

const TaskList = ({ tasks }: { tasks: Task[] }) => {
  return (
    <div className='w-full max-w-[800px] bg-card rounded-lg p-4 flex flex-col items-center'>
      <h1 className='text-4xl font-semibold'>Lista de Tarefas 🔨</h1>
      <ul className='w-full mt-4 flex flex-col gap-3'>
        {tasks.length > 0 ? (
          tasks.map((task) => (
            <TaskComponent key={uuidv4()} task={task} />
          ))
        ) : (
          <span className="text-muted-foreground text-tiny text-center">Não há tarefas a serem feitas, adicione alguma!</span>
        )}
      </ul>
    </div>
  );
};

export default TaskList;
