import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FunctionalLeadComponent } from './functional-lead/functional-lead.component';
import { QuestionaireComponent } from './questionaire/questionaire.component';
import { CommercialComponent } from './commercial/commercial.component';
import { ActivitiesComponent } from './activities/activities.component';
import { SystemComponent } from './system/system.component';
import { DataComponent } from './data/data.component';
import { ReportComponent } from './report/report.component';
import { SalesComponent } from './sales/sales.component';


const routes: Routes = [
  // {path : '', component: QuestionaireComponent},
  {path : '', redirectTo: '/Questionaire', pathMatch: 'full'},
  {path : 'Questionaire', component: QuestionaireComponent},
  {path : 'FunctionalLead', component: FunctionalLeadComponent},
  {path : 'Commercial', component: CommercialComponent},
  {path : 'Activities', component: ActivitiesComponent},
  {path : 'System', component: SystemComponent},
  {path : 'Data', component: DataComponent},
  {path : 'Report', component: ReportComponent},
  {path : 'Sales', component: SalesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [
  FunctionalLeadComponent,
  QuestionaireComponent,
]
