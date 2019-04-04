import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DatabaseComponent } from './database/database.component';
import { MappingComponent } from './mapping/mapping.component';
import { OntologyComponent } from './ontology/ontology.component';
import { ValidateComponent } from './validate/validate.component';
import { EditComponent } from './edit/edit.component';
import { ResultComponent } from './result/result.component';

const routes: Routes = [
  {path: 'database', component: DatabaseComponent},
  {path: 'mapping', component: MappingComponent},
  {path: 'ontology', component: OntologyComponent},
  {path: 'validate', component: ValidateComponent},
  {path: 'edit', component: EditComponent},
  {path: 'result', component: ResultComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
