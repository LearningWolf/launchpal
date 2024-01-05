import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-commercial',
  templateUrl: './commercial.component.html',
  styleUrls: ['./commercial.component.scss']
})
export class CommercialComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  tblHead = ['Role','Identified/Hired','Name','Onboarding ETA','Action'];

  
  
  fnctnlTable = ['Program Lead','Sales Lead','Marketing Lead','Market Access Lead','Medical Lead','Medical Affairs Lead','PMO','IT Lead']

}
