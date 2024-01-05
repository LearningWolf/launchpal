import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  modalTablHead = ['Role','Description','Name'];
  modalTable = [
    {role: 'Patient Service Lead', description: 'Loreum ipsum dolor sit amet '},
    {role: 'Finance Lead', description: 'Loreum ipsum dolor sit amet '},
    {role: 'Trade and Distributor Lead', description: 'Loreum ipsum dolor sit amet '},
    {role: 'Supply Chain Lead', description: 'Loreum ipsum dolor sit amet '},
    {role: 'Data Aggregator Lead', description: 'Loreum ipsum dolor sit amet '},
    {role: 'Data, Analytics and Insight Lead', description: 'Loreum ipsum dolor sit amet '},
  ]
}
