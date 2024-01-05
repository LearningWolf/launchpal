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

  tblHead = ['Role','Identified/Hired','Name','Onboarding ETA','Action'];

  
  
  fnctnlTable = ['Program Lead','Sales Lead','Marketing Lead','Market Access Lead','Medical Lead','Medical Affairs Lead','PMO','IT Lead']
  
  
  
  
  
  


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
