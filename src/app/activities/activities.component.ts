import { Component, OnInit } from '@angular/core';
import { ActivitiesService } from './activities.service';
import { Task } from './task.model';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.scss']
})
export class ActivitiesComponent implements OnInit {
  tblHead = ['Role','Identified/Hired','Name','Onboarding ETA','Action'];
  fnctnlTable = [
    {role: 'Program Lead', hired: 'yes', name: 'xyz', eta: 'May,2022'},
    {role: 'Sales Lead', hired: 'yes', name: 'xyz', eta: 'May,2022'},
    {role: 'Marketing Lead', hired: 'yes', name: 'xyz', eta: 'May,2022'},
    {role: 'Market Access Lead', hired: 'yes', name: 'xyz', eta: 'May,2022'},
    {role: 'Medical Affairs Lead', hired: 'yes', name: 'xyz', eta: 'May,2022'},
    {role: 'PMO', hired: 'yes', name: 'xyz', eta: 'May,2022'},
    {role: 'IT Lead', hired: 'yes', name: 'xyz', eta: 'May,2022'}
  ];
  modalTablHead = ['Role','Description','Name','Eta'];
  modalTable = [
    {role: 'Patient Service Lead', description: 'Loreum ipsum dolor sit amet '},
    {role: 'Finance Lead', description: 'Loreum ipsum dolor sit amet '},
    {role: 'Trade and Distributor Lead', description: 'Loreum ipsum dolor sit amet '},
    {role: 'Supply Chain Lead', description: 'Loreum ipsum dolor sit amet '},
    {role: 'Data Aggregator Lead', description: 'Loreum ipsum dolor sit amet '},
    {role: 'Data, Analytics and Insight Lead', description: 'Loreum ipsum dolor sit amet '},
  ];
  hiredIdentify = ['Yes', 'No']
  tasks: any[] = [];
  role: any | undefined;
  hired: any | undefined;
  name: any | undefined;
  eta: any | undefined;
  constructor(private activeSevrice : ActivitiesService) { }

  ngOnInit(): void {
    this.tasks = this.activeSevrice.tasks
  }
  addTask() {
    this.activeSevrice.addTask(new Task(this.role, this.hired, this.name,this.eta));
    this.role = '';
    this.hired = '';
    this.name = '';
    this.eta = '';
 }

 deleteTask(index: number) {
    this.activeSevrice.deleteTask(index);
 }

 updateTask(index: number) {
    this.activeSevrice.updateTask(index, new Task(this.role, this.hired, this.name,this.eta));
      this.role = '';
      this.hired = '';
      this.name = '';
      this.eta = '';
 }

}
