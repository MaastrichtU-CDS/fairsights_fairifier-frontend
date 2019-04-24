import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MappingComponent,
    OntologyComponent,
    DatabaseComponent,
    ValidateComponent,
    EditComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
