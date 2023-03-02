import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  sideNav = ['Questionaire','Functional Lead', 'Comercial and MSL', 'Activities Mapping', 'Sysytem Needs', 'Data Source', 'Report & Analytics', 'KPI - Sales' ]

  sideNavBar  = [
    {herfSideNav: '/Questionaire', sideNav: 'Questionaire'},
    {herfSideNav: '/FunctionalLead', sideNav: 'Functional Lead'},
    {herfSideNav: '/Commercial', sideNav: 'Commercial and MSL'},
    {herfSideNav: '/Activities', sideNav: 'Activities Mapping'},
    {herfSideNav: '/System', sideNav: 'System Needs'},
    {herfSideNav: '/Data', sideNav: 'Data Source'},
    {herfSideNav: '/Report', sideNav: 'Report & Analytics'},
    {herfSideNav: '/Sales', sideNav: 'KPI - Sales'},
  ]
  constructor() { }

  ngOnInit(): void {
  }



}
