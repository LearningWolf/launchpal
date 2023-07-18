import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss']
})
export class SalesComponent implements OnInit {


  pipesName = "Keshav kumar";
  person = {
    'firsname': 'Keshav',
  }
  constructor() { }

  ngOnInit(): void {
  }

}
