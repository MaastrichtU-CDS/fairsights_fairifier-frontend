import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MappingComponent } from './mapping/mapping.component';
import { OntologyComponent } from './ontology/ontology.component';
import { DatabaseComponent } from './database/database.component';
import { ValidateComponent } from './validate/validate.component';
import { EditComponent } from './edit/edit.component';
import { ResultComponent } from './result/result.component';

import { AddDatabaseModalComponent } from './modal/add-database-modal/add-database-modal.component';
import { AddOntologyModalComponent } from './modal/add-ontology-modal/add-ontology-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MappingComponent,
    OntologyComponent,
    DatabaseComponent,
    ValidateComponent,
    EditComponent,
    ResultComponent,
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
