import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'courseDuration' })
export class DuratioPipe implements PipeTransform {
    transform(value: number): string {
        const hours = Math.floor(value / 60);
        let duration = '';
        if (hours) {
            duration = `${hours}h`;
        }
        return duration + ` ${value % 60}m`;
    }
}