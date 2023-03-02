import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {

  topBar = {
    a : ['name01', 'name02'],
    b : {}
  }

  constructor() { }

  ngOnInit(): void {
  }

}
