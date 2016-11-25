import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { HealthCheckComponent } from './healthcheck.component';

@NgModule({
  declarations: [
    HealthCheckComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  exports: [ HealthCheckComponent ],
  providers: []
})
export class HealthCheckModule { }
