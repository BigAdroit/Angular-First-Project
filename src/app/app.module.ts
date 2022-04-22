import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CollegelistService } from './collegelist.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CollegeComponent } from './college/college.component';
import { ManagementComponent } from './management/management.component';
import { SideComponent } from './side/side.component';
import { ContentComponent } from './content/content.component';


@NgModule({
  declarations: [
    AppComponent,
    CollegeComponent,
    ManagementComponent,
    SideComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CollegelistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
