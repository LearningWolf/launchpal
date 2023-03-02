import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainComponent } from './main/main.component';
import { TopbarComponent } from './topbar/topbar.component';
import { CommercialComponent } from './commercial/commercial.component';
import { ActivitiesComponent } from './activities/activities.component';
import { SystemComponent } from './system/system.component';
import { DataComponent } from './data/data.component';
import { ReportComponent } from './report/report.component';
import { SalesComponent } from './sales/sales.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    MainComponent,
    TopbarComponent,
    routingComponent,
    CommercialComponent,
    ActivitiesComponent,
    SystemComponent,
    DataComponent,
    ReportComponent,
    SalesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
