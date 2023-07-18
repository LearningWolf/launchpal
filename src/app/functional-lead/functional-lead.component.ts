import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-functional-lead',
  templateUrl: './functional-lead.component.html',
  styleUrls: ['./functional-lead.component.scss']
})
export class FunctionalLeadComponent implements OnInit {
modalTblHead: any;

  constructor() { }

  ngOnInit(): void {
  }

  fnctnlTable = ['Program Lead','Sales Lead','Marketing Lead','Market Access Lead','Medical Lead','Medical Affairs Lead','PMO','IT Lead']
  tblHead = ['Role','Description','Name','Onboarding ETA','Action'];
  modalTablHead = ['Role','Description','Name'];
  modalTable = [
    {role: 'Patient Service Lead', description: 'Loreum ipsum dolor sit amet '},
    {role: 'Finance Lead', description: 'Loreum ipsum dolor sit amet '},
    {role: 'Trade and Distributor Lead', description: 'Loreum ipsum dolor sit amet '},
    {role: 'Supply Chain Lead', description: 'Loreum ipsum dolor sit amet '},
    {role: 'Data Aggregator Lead', description: 'Loreum ipsum dolor sit amet '},
    {role: 'Data, Analytics and Insight Lead', description: 'Loreum ipsum dolor sit amet '},
  ]


// Program Lead
// Sales Lead
// Marketing Lead
// Market Access Lead
// Medical Lead
// Medical Affairs Lead 
// PMO
// IT Lead
// Program Lead 
// Sales Lead
 
  functionTableBody = {
    
  }

}
