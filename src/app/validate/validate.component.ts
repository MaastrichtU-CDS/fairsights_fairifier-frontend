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
  database = '';

  ngOnInit() {
    this.messageService.changeMessage('');
    this.validateService.getSqlQuery();
    this.messageService.validateTestSuccesful = false;
    this.validateService.valueChanged = false;
  }

    amountChanged(newAmount) {
        this.resultsAmount = newAmount.target.value;
    }

    databaseChanged(newDatabase) {
        this.database = newDatabase.target.value;
        this.messageService.changeMessage('New database');
    }

    sqlChanged(newQuery) {
        this.validateService.currentQuery = newQuery.target.value;
        this.messageService.changeMessage('Query changed');
        this.validateService.valueChanged = true;
    }

    testData() {
        if (this.resultsAmount !== undefined) {
            this.validateService.testSqlQuery(this.resultsAmount, this.database, this.validateService.currentQuery);
        } else {
            this.messageService.changeMessage('Please insert a results amount');
        }
    }

    saveData() {
        this.validateService.saveSqlQuery();
    }
}
