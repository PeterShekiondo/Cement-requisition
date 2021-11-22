import { Repository } from 'typeorm';
import { CreateTaskDto } from './dto/create-tasks.dto';
import { GetTaskFilterDto } from './dto/get-tasks-fiilter.dto';
import { Task } from './task.entity';
export declare class TaskRepositoty extends Repository<Task> {
    getTasks(filterDto: GetTaskFilterDto): Promise<Task[]>;
    createTask(createTaskDto: CreateTaskDto): Promise<Task>;
}
