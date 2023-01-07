import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RubricaComponent } from './Projecte/Components/rubrica/rubrica.component';

const routes: Routes = [
  { path: 'rubrica', component: RubricaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
