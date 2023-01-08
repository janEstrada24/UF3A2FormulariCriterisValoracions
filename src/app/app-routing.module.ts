import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriteriComponent } from './Projecte/Components/criteri/ReactiveForms/criteri/criteri.component';

const routes: Routes = [
  { path: 'criteri', component: CriteriComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
