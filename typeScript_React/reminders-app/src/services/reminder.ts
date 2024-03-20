import axios from "axios";
import Reminder from "../models/Reminder";
import { log } from "console";
function testErrors(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value as Function;
    
    descriptor.value = function (...args: any[]) {
        try {
            return originalMethod.apply(this, args); // Corrected here
        } catch (error) {
            let errorText: string = 'something wrong happened!';
            if (error instanceof Error) {
                errorText = error.message;
            }
            throw new Error(errorText);
        }
    };

    return descriptor;
}
class ReminderService {

    http = axios.create({
        baseURL: 'https://jsonplaceholder.typicode.com/'
    });

    @testErrors
    async getReminders() {
        let response = await this.http.get<Reminder[]>('/todos');
        return response.data;
    }

    @testErrors
    async addReminder(title: string) {
        let response = await this.http.post<Reminder>('/todos', { title });
        return response.data;
    }

    @testErrors
    async removeReminder(id: number) {
        let response = await this.http.delete<Reminder[]>(`/todos/${id}`);
        return response.data;
    }

    @testErrors
    async editReminder(id: number, updatedTitle: string) {
        let response = await this.http.put<Reminder[]>(`/todos/${id}`, { title: updatedTitle });
        return response.data;
    }
}
export default new ReminderService()