//Angular Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Modules
import { CustomMaterialModule } from "./custom-material.module";

//Components
import { AppComponent } from './app.component';
import { MyDashboardComponent } from "./my-dashboard/my-dashboard.component";

@NgModule({
  declarations: [
    AppComponent,
    MyDashboardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CustomMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
