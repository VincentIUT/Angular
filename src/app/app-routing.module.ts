import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { ShowbugComponent } from './showbug/showbug.component';

const routes: Routes = [
  { path: 'formulaire', component: FormulaireComponent },
  { path: 'showbug', component: ShowbugComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
