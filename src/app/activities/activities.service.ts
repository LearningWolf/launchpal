import { Injectable } from '@angular/core';
import { Task } from './task.model';

@Injectable({
  providedIn: 'root'
})
export class ActivitiesService {
  tasks: any[] = [
   {role: 'Program Lead', hired: 'yes', name: 'xyz', eta: 'May,2022'},
   {role: 'Sales Lead', hired: 'yes', name: 'xyz', eta: 'May,2022'},
   {role: 'Marketing Lead', hired: 'yes', name: 'xyz', eta: 'May,2022'},
   {role: 'Market Access Lead', hired: 'yes', name: 'xyz', eta: 'May,2022'},
   {role: 'Medical Affairs Lead', hired: 'yes', name: 'xyz', eta: 'May,2022'},
   {role: 'PMO', hired: 'yes', name: 'xyz', eta: 'May,2022'},
   {role: 'IT Lead', hired: 'yes', name: 'xyz', eta: 'May,2022'}
  ];
  constructor() { }
  
  addTask(task: any) {
    this.tasks.push(task);
 }

 deleteTask(index: number) {
    this.tasks.splice(index, 1);
 }

 updateTask(index: number, updatedTask: Task) {
    this.tasks[index] = updatedTask;
 }
}
