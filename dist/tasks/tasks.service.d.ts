import { Task } from './task.entity';
import { TaskStatus } from './task-status.enum';
import { CreateTaskDto } from './dto/create-tasks.dto';
import { TaskRepositoty } from './task.repository';
import { GetTaskFilterDto } from './dto/get-tasks-fiilter.dto';
export declare class TasksService {
    private taskRepository;
    constructor(taskRepository: TaskRepositoty);
    getTasks(filterDto: GetTaskFilterDto): Promise<any>;
    createTask(CreateTaskDto: CreateTaskDto): Promise<Task>;
    getTaskByID(id: number): Promise<Task>;
    deleteTaskByID(id: number): Promise<string>;
    updateTaskStatus(id: number, status: TaskStatus): Promise<Task>;
}
