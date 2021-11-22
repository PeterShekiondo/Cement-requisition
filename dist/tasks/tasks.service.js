"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TasksService = void 0;
const common_1 = require("@nestjs/common");
const task_repository_1 = require("./task.repository");
const typeorm_1 = require("@nestjs/typeorm");
let TasksService = class TasksService {
    constructor(taskRepository) {
        this.taskRepository = taskRepository;
    }
    getTasks(filterDto) {
        return this.taskRepository.getTasks(filterDto);
    }
    createTask(CreateTaskDto) {
        return this.taskRepository.createTask(CreateTaskDto);
    }
    async getTaskByID(id) {
        const found = await this.taskRepository.findOne(id);
        if (!found) {
            throw new common_1.NotFoundException('oops..! There is no Task with such ID');
        }
        return found;
    }
    async deleteTaskByID(id) {
        const task = await this.taskRepository.delete(id);
        if (task.affected === 0) {
            throw new common_1.NotFoundException('Task with ID ' + id + ' not found ');
        }
        else {
            const response = 'task with ID ' + id + ' has been deleted successively';
            return response;
        }
    }
    async updateTaskStatus(id, status) {
        const task = await this.getTaskByID(id);
        task.status = status;
        await task.save();
        return task;
    }
};
TasksService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(task_repository_1.TaskRepositoty)),
    __metadata("design:paramtypes", [task_repository_1.TaskRepositoty])
], TasksService);
exports.TasksService = TasksService;
//# sourceMappingURL=tasks.service.js.map