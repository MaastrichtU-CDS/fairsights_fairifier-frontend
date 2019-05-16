import { Component, OnInit } from '@angular/core';
import { MessageService } from '../service/message.service';
import { ValidateService } from '../service/validate.service';

@Component({
  selector: 'app-validate',
  templateUrl: './validate.component.html',
  styleUrls: ['./validate.component.css']
})
export class ValidateComponent implements OnInit {

  constructor(
      public validateService: ValidateService,
      public messageService: MessageService
  ) { }

  resultsAmount;
  sqlQuery = '';
  database = '';

  ngOnInit() {
    this.messageService.changeMessage('');
  }

    amountChanged(newAmount) {
        this.resultsAmount = newAmount.target.value;
    }

    databaseChanged(newDatabase) {
        this.database = newDatabase.target.value;
    }

    sqlChanged(newQuery) {
        this.sqlQuery = newQuery.target.value;
    }

    testData() {
        if (this.resultsAmount != undefined) {
            this.validateService.testSqlQuery(this.resultsAmount, this.database, this.sqlQuery);
        } else {
            this.messageService.changeMessage('Please insert a results amount')
        }
    }

    saveData() {
        this.validateService.saveSqlQuery();
    }
}
