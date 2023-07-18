import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {


  sideNavBar01  = [
    {herfSideNav: '/Questionaire', sideNav: 'Questionaire'},
    {herfSideNav: '/FunctionalLead', sideNav: 'Functional Lead'},
    {herfSideNav: '/Commercial', sideNav: 'Commercial and MSL'}
  ]
  sideNavBar02  = [
    {herfSideNav: '/System', sideNav: 'System Needs'},
    {herfSideNav: '/Data', sideNav: 'Data Source'},
    {herfSideNav: '/Report', sideNav: 'Report & Analytics'},
    {herfSideNav: '/Sales', sideNav: 'KPI - Sales'},
  ]
  sidebarAcord = ['Sales Ops', 'Medical', 'Marketing', 'Marketing Access','Finance','Risk & Compliance','IT'];
  constructor() { }

  ngOnInit(): void {
  }



}
