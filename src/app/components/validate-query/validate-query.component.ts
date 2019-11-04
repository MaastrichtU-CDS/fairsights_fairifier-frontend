import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../service/message.service';
import { ValidateQueryService } from '../../service/validate-query.service';
import { DatabaseService } from '../../service/database.service';

@Component({
  selector: 'app-validate-query',
  templateUrl: './validate-query.component.html',
  styleUrls: ['./validate-query.component.css']
})
export class ValidateQueryComponent implements OnInit {

    constructor(
        public validateQueryService: ValidateQueryService,
        public messageService: MessageService,
        public databaseService: DatabaseService
    ) { }

    resultsAmount;
    database = '';

    ngOnInit() {
        this.databaseService.getDatabases();
        this.messageService.changeMessage('');
        this.validateQueryService.getSqlQuery();
        this.messageService.validateTestSuccesful = false;
        this.validateQueryService.valueChanged = false;
        this.validateQueryService.dataArray = [];
        this.validateQueryService.dataKeyProps = [];
    }

    amountChanged(newAmount) {
        this.resultsAmount = newAmount.target.value;
    }

    databaseChanged(newDatabase) {
        this.database = newDatabase
        this.messageService.changeMessage('New database');
    }

    sqlChanged(newQuery) {
        this.validateQueryService.currentQuery = newQuery.target.value;
        this.messageService.changeMessage('Query changed');
        this.validateQueryService.valueChanged = true;
    }

    testData() {
        if (this.database === undefined || this.database === "") {
            this.database = this.databaseService.databaseArray[0].name
        }
        if (this.resultsAmount !== undefined && this.resultsAmount !== '' && this.database !== '') {
            if (this.validateQueryService.currentQuery !== undefined && this.validateQueryService.currentQuery !== '') {
                this.validateQueryService.testSqlQuery(this.resultsAmount, this.database, this.validateQueryService.currentQuery);
            } else {
                this.messageService.changeMessage('Please insert a Sql Query');
            }
        } else {
            this.messageService.changeMessage('Please insert a results amount and a database');
        }
    }

    saveData() {
        this.validateQueryService.saveSqlQuery();
    }
}
