import { Task } from "../models/task-model"
import { Checkbox } from "./ui/checkbox"

const TaskComponent = ({task}: {
    task: Task
}) => {
    return(
        <li>
            <label htmlFor={task.title}>
                <div className='w-full flex flex-col gap-0.5 items-left justify-center'>
                <div className='flex flex-row items-center'>
                    <Checkbox className='rounded-md' id={task.title} name={task.title} />
                    <p className='text-xl ml-3 font-semibold'>{task.title}</p>
                </div>
                <span className='text-sm text-muted-foreground'>{task.description}</span>
                </div>
            </label>
        </li>   
    )
    
}

export default TaskComponent