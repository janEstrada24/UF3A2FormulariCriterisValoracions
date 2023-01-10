import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ValoracioComponent } from './Projecte/Components/valoracio/template-driven/valoracio.component';
import { RubricaComponent } from './Projecte/Components/rubrica/rubrica.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CriteriComponent } from './Projecte/Components/criteri/ReactiveForms/criteri/criteri.component';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from  '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ProvaformarrayComponent } from './Projecte/Components/provaformarray/provaformarray.component';

@NgModule({
  declarations: [
    AppComponent,
    ValoracioComponent,
    RubricaComponent,
    CriteriComponent,
    ProvaformarrayComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
