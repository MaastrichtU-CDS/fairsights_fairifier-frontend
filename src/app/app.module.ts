import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MappingComponent } from './mapping/mapping.component';
import { OntologyComponent } from './ontology/ontology.component';
import { DatabaseComponent } from './database/database.component';
import { ValidateComponent } from './validate/validate.component';
import { EditComponent } from './edit/edit.component';
import { ResultComponent } from './result/result.component';
import { MessageService } from './service/message.service';
import { AddDatabaseModalComponent } from './modal/add-database-modal/add-database-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

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
    AddDatabaseModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    AddDatabaseModalComponent
  ]
})
export class AppModule { }
