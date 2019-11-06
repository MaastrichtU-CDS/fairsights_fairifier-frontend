import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DatabaseComponent } from './components/database/database.component';
import { MappingComponent } from './components/mapping/mapping.component';
import { OntologyComponent } from './components/ontology/ontology.component';
import { ValidateQueryComponent } from './components/validate-query/validate-query.component';
import { ValidateMappingComponent } from './components/validate-mapping/validate-mapping.component';
import { ResultComponent } from './components/result/result.component';
import { UserManualComponent } from './components/user-manual/user-manual.component';

const routes: Routes = [
  {path: 'database', component: DatabaseComponent},
  {path: 'mapping', component: MappingComponent},
  {path: 'ontology', component: OntologyComponent},
  {path: 'validate-query', component: ValidateQueryComponent},
  {path: 'validate-mapping', component: ValidateMappingComponent},
  {path: 'result', component: ResultComponent},
  {path: 'user-manual', component: UserManualComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
