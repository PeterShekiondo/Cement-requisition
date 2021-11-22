import { CreateTaskDto } from './dto/create-tasks.dto';
import { GetTaskFilterDto } from './dto/get-tasks-fiilter.dto';
import { Task } from './task.entity';
import { TaskStatus } from './task-status.enum';
import { TasksService } from './tasks.service';
export declare class TasksController {
    private tasksService;
    constructor(tasksService: TasksService);
    getTasks(filterDto: GetTaskFilterDto): Promise<Task[]>;
    createTask(CreateTaskDto: CreateTaskDto): Promise<Task>;
    getTasksByID(id: number): Promise<Task>;
    deleteTaskByID(id: number): Promise<string>;
    updateTaskStatus(id: number, status: TaskStatus): Promise<Task>;
}
