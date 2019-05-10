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
      private validateService: ValidateService,
      public messageService: MessageService
  ) { }

  resultsAmount;
  sqlQuery = '';
  database = '';

  ngOnInit() {
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
        this.validateService.testSqlQuery(this.resultsAmount, this.database, this.sqlQuery);
    }
    saveData() {
        this.validateService.saveSqlQuery()
    }
}
