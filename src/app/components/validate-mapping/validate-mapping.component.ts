import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../service/message.service';
import { EditService } from '../../service/validate-mapping.service';
import { GetDatabaseService } from '../../service/get-database.service';

@Component({
    selector: 'app-validate-mapping',
    templateUrl: './validate-mapping.component.html',
    styleUrls: ['./validate-mapping.component.css']
})
export class ValidateMappingComponent implements OnInit {
    databaseName;
    resultsAmount;

    constructor(
        public messageService: MessageService,
        public editService: EditService,
        public getDatabaseService: GetDatabaseService
    ) { }

    ngOnInit() {
        this.getDatabaseService.getDatabase
        this.messageService.changeMessage('');
        this.editService.testSuccesful = false;
        this.editService.getMappingTriples();
    }
    
    changeMappingDefinitions(newMappingDefinition) {
        this.editService.testSuccesful = false;
        this.messageService.changeMessage('Mapping Definitions Changed'),
        console.log('change mapping definitions'),
        this.editService.mappingDefinitionChanged = newMappingDefinition.target.value;
        console.log(this.editService.mappingDefinitionChanged);
    }

    saveMappingDefinitions() {
        this.messageService.changeMessage('Mapping Definitions Save');
        console.log('save mapping definitions');
        this.editService.saveMappingDefinitions();
    }

    testMappingDefinitions() {
        if (this.databaseName === undefined || this.databaseName === "") {
            this.databaseName = this.getDatabaseService.getDatabaseArray[0].name
        }
        if ( this.databaseName !== undefined && this.databaseName !== '' && this.resultsAmount !== undefined && this.resultsAmount !== '') {
            if ( this.editService.mappingDefinitionChanged !== undefined && this.editService.mappingDefinitionChanged !== '') {
                this.messageService.changeMessage('Mapping Definitions Test'),
                this.editService.testMappingDefinitions(this.databaseName, this.resultsAmount);
            } else {
                this.messageService.changeMessage('Please insert mapping definitions');
            }

        } else {
            this.messageService.changeMessage('Please insert a database and result amount');
        }
    }

    changeResultsAmount(newAmount) {
        this.editService.testSuccesful = false;
        this.resultsAmount = newAmount.target.value;
        console.log(this.resultsAmount);
        this.messageService.changeMessage( 'New Amount: ' + this.resultsAmount);
    }

    changeUsedDatabase(newDatabase)  {
        this.editService.testSuccesful = false;
        this.databaseName = newDatabase,
        this.messageService.changeMessage('Database changed to: ' + this.databaseName);
        console.log(this.databaseName);
    }
}
