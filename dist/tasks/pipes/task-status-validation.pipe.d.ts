import { ArgumentMetadata, PipeTransform } from '@nestjs/common';
import { TaskStatus } from '../task-status.enum';
export declare class TaskStatusValidationPipe implements PipeTransform {
    readonly allowesStatuses: TaskStatus[];
    private isStatusvalid;
    transform(value: any, metadata: ArgumentMetadata): any;
}
