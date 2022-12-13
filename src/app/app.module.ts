import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ValoracioComponent } from './Projecte/Components/valoracio/template-driven/valoracio.component';
import { CriteriComponent } from './Projecte/Components/criteri/template-driven/criteri.component';
@NgModule({
  declarations: [
    AppComponent,
    ValoracioComponent,
    CriteriComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
