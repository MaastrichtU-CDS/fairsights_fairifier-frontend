import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../service/message.service';
import { ValidateMappingService } from '../../service/validate-mapping.service';
import { DatabaseService } from '../../service/database.service';

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
        public validateMappingService: ValidateMappingService,
        public databaseService: DatabaseService
    ) { }

    ngOnInit() {
        this.databaseService.getDatabases();
        this.messageService.changeMessage('');
        this.validateMappingService.testSuccesful = false;
        this.validateMappingService.getMappingTriples();
    }
    
    changeMappingDefinitions(newMappingDefinition) {
        this.validateMappingService.testSuccesful = false;
        this.messageService.changeMessage('Mapping Definitions Changed'),
        console.log('change mapping definitions'),
        this.validateMappingService.mappingDefinitionChanged = newMappingDefinition.target.value;
        console.log(this.validateMappingService.mappingDefinitionChanged);
    }

    saveMappingDefinitions() {
        this.messageService.changeMessage('Mapping Definitions Save');
        console.log('save mapping definitions');
        this.validateMappingService.saveMappingDefinitions();
    }

    testMappingDefinitions() {
        if (this.databaseName === undefined || this.databaseName === "") {
            this.databaseName = this.databaseService.databaseArray[0].name
        }
        if ( this.databaseName !== undefined && this.databaseName !== '' && this.resultsAmount !== undefined && this.resultsAmount !== '') {
            if ( this.validateMappingService.mappingDefinitionChanged !== undefined && this.validateMappingService.mappingDefinitionChanged !== '') {
                this.messageService.changeMessage('Mapping Definitions Test'),
                this.validateMappingService.testMappingDefinitions(this.databaseName, this.resultsAmount);
            } else {
                this.messageService.changeMessage('Please insert mapping definitions');
            }

        } else {
            this.messageService.changeMessage('Please insert a database and result amount');
        }
    }

    changeResultsAmount(newAmount) {
        this.validateMappingService.testSuccesful = false;
        this.resultsAmount = newAmount.target.value;
        console.log(this.resultsAmount);
        this.messageService.changeMessage( 'New Amount: ' + this.resultsAmount);
    }

    changeUsedDatabase(newDatabase)  {
        this.validateMappingService.testSuccesful = false;
        this.databaseName = newDatabase,
        this.messageService.changeMessage('Database changed to: ' + this.databaseName);
        console.log(this.databaseName);
    }
}
