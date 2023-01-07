import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ValoracioComponent } from './Projecte/Components/valoracio/template-driven/valoracio.component';
import { RubricaComponent } from './Projecte/Components/rubrica/rubrica.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CriteriComponent } from './Projecte/Components/criteri/ReactiveForms/criteri/criteri.component';

@NgModule({
  declarations: [
    AppComponent,
    ValoracioComponent,
    RubricaComponent,
    CriteriComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
