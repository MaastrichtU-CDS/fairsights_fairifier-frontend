import { Component, OnInit } from '@angular/core';
import { MessageService } from '../service/message.service';

@Component({
  selector: 'app-validate',
  templateUrl: './validate.component.html',
  styleUrls: ['./validate.component.css']
})
export class ValidateComponent implements OnInit {

  constructor() { }

  resultsAmount = 5;
  sqlQuery = '';
  testCounter = 0;

  ngOnInit() {
    this.tester();
  }

  tester() {
    while (this.testCounter < 1) {
      this.testCounter += 1;
      this.sqlQuery += 'ABC ';
    }
  }
}
