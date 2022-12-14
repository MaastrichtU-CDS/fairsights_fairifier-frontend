import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MappingComponent } from './components/mapping/mapping.component';
import { OntologyComponent } from './components/ontology/ontology.component';
import { DatabaseComponent } from './components/database/database.component';
import { ValidateQueryComponent } from './components/validate-query/validate-query.component';
import { ValidateMappingComponent } from './components/validate-mapping/validate-mapping.component';
import { ResultComponent } from './components/result/result.component';
import { UserManualComponent } from './components/user-manual/user-manual.component';

import { AddDatabaseModalComponent } from './modal/add-database-modal/add-database-modal.component';
import { AddOntologyModalComponent } from './modal/add-ontology-modal/add-ontology-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MappingComponent,
    OntologyComponent,
    DatabaseComponent,
    ValidateQueryComponent,
    ValidateMappingComponent,
    ResultComponent,
    UserManualComponent,
    AddDatabaseModalComponent,
    AddOntologyModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [AddDatabaseModalComponent, AddOntologyModalComponent]
})
export class AppModule { }
