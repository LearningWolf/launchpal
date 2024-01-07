import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-commercial',
  templateUrl: './commercial.component.html',
  styleUrls: ['./commercial.component.scss']
})
export class CommercialComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.functionTableBody();
  }
  fnctnlTable1 : any[] = []
  functionTableBody () {
    this.http.get("assets/db.json").subscribe((res:any)=>{
      this.fnctnlTable1 = res.data;
    })
  }
  tblHead = ['Role','Identified/Hired','Name','Onboarding ETA','Action'];
  fnctnlTable = [
    {"ttl" : 'Program Lead', "hrd" : "yes", "name": "xyz", "onborad":"01/02/2020"},
    {"ttl" : 'Sales Lead', "hrd" : "yes", "name": "xyz", "onborad":"01/02/2020"},
    {"ttl" : 'Marketing Lead', "hrd" : "yes", "name": "xyz", "onborad":"01/02/2020"},
    {"ttl" : 'Market Acces Lead', "hrd" : "yes", "name": "xyz", "onborad":"01/02/2020"},
    {"ttl" : 'Medical Lead', "hrd" : "yes", "name": "xyz", "onborad":"01/02/2020"},
    {"ttl" : 'Medical Affairs Lead', "hrd" : "yes", "name": "xyz", "onborad":"01/02/2020"},
    {"ttl" : 'PMO Lead', "hrd" : "yes", "name": "xyz", "onborad":"01/02/2020"},
    {"ttl" : 'IT', "hrd" : "yes", "name": "xyz", "onborad":"01/02/2020"},
  ]; 
  // 'Medical Affairs Lead','PMO','IT Lead']

}
