import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-functional-lead',
  templateUrl: './functional-lead.component.html',
  styleUrls: ['./functional-lead.component.scss']
})
export class FunctionalLeadComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  tblHead = ['Role','Identified/Hired','Name','Onboarding ETA','Action'];

  functionTableBody = {
    
  }

}
