import { Component, OnInit } from '@angular/core';
import { MessageService } from '../service/message.service';
import { ValidateService } from '../service/validate.service';
import { GetDatabaseService } from '../service/get-database.service';

@Component({
  selector: 'app-validate',
  templateUrl: './validate.component.html',
  styleUrls: ['./validate.component.css']
})
export class ValidateComponent implements OnInit {

    constructor(
        public validateService: ValidateService,
        public messageService: MessageService,
        public getDatabaseService: GetDatabaseService
    ) { }

    resultsAmount;
    database = '';

    ngOnInit() {
        this.getDatabaseService.getDatabase();
        this.messageService.changeMessage('');
        this.validateService.getSqlQuery();
        this.messageService.validateTestSuccesful = false;
        this.validateService.valueChanged = false;
        this.validateService.dataArray = [];
        this.validateService.dataKeyProps = [];
    }

    amountChanged(newAmount) {
        this.resultsAmount = newAmount.target.value;
    }

    databaseChanged(newDatabase) {
        this.database = newDatabase
        this.messageService.changeMessage('New database');
    }

    sqlChanged(newQuery) {
        this.validateService.currentQuery = newQuery.target.value;
        this.messageService.changeMessage('Query changed');
        this.validateService.valueChanged = true;
    }

    testData() {
        if (this.database === undefined || this.database === "") {
            this.database = this.getDatabaseService.getDatabaseArray[0].name
        }
        if (this.resultsAmount !== undefined && this.resultsAmount !== '' && this.database !== '') {
            if (this.validateService.currentQuery !== undefined && this.validateService.currentQuery !== '') {
                this.validateService.testSqlQuery(this.resultsAmount, this.database, this.validateService.currentQuery);
            } else {
                this.messageService.changeMessage('Please insert a Sql Query');
            }
        } else {
            this.messageService.changeMessage('Please insert a results amount and a database');
        }
    }

    saveData() {
        this.validateService.saveSqlQuery();
    }
}
