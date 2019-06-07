import { Component, OnInit } from '@angular/core';
import { MessageService } from '../service/message.service';
import { EditService } from '../service/edit.service';

@Component({
    selector: 'app-edit',
    templateUrl: './edit.component.html',
    styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
    databaseName;
    resultsAmount;

    constructor(
        public messageService: MessageService,
        public editService: EditService
    ) { }

    ngOnInit() {
        this.messageService.changeMessage('');
        this.editService.testSuccesful = false;
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
        if ( this.databaseName !== undefined && this.databaseName !== '' && this.resultsAmount !== undefined && this.resultsAmount !== '') {
            if ( this.editService.mappingDefinitionChanged !== undefined && this.editService.mappingDefinitionChanged !== '') {
                this.messageService.changeMessage('Mapping Definitions Test'),
                this.editService.testMappingDefinitions();
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
        this.databaseName = newDatabase.target.value,
        this.messageService.changeMessage('Database changed to: ' + this.databaseName);
        console.log(this.databaseName);
    }
}
