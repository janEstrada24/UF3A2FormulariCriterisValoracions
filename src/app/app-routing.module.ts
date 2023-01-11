import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriteriComponent } from './Projecte/Components/criteri/ReactiveForms/criteri/criteri.component';
import { RubricaComponent } from './Projecte/Components/rubrica/rubrica.component';

const routes: Routes = [
  { path: 'criteri', component: CriteriComponent },
  { path: 'rubrica', component: RubricaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
