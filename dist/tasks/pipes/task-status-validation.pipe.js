"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskStatusValidationPipe = void 0;
const common_1 = require("@nestjs/common");
const task_status_enum_1 = require("../task-status.enum");
class TaskStatusValidationPipe {
    constructor() {
        this.allowesStatuses = [
            task_status_enum_1.TaskStatus.OPEN,
            task_status_enum_1.TaskStatus.IN_PROGRESS,
            task_status_enum_1.TaskStatus.DONE,
        ];
    }
    isStatusvalid(status) {
        const indx = this.allowesStatuses.indexOf(status);
        return indx !== -1;
    }
    transform(value, metadata) {
        if (!this.isStatusvalid(value)) {
            throw new common_1.BadRequestException('Invaliid provided status');
        }
        return value;
    }
}
exports.TaskStatusValidationPipe = TaskStatusValidationPipe;
//# sourceMappingURL=task-status-validation.pipe.js.map