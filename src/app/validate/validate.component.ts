import { Component, OnInit } from '@angular/core';
import { MessageService } from '../service/message.service';

@Component({
  selector: 'app-validate',
  templateUrl: './validate.component.html',
  styleUrls: ['./validate.component.css']
})
export class ValidateComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.tester();
  }

  useLimit = false;
  resultsAmount = 5;
  sqlQuery = '';
  testCounter = 0;

  tester() {
    while (this.testCounter < 1) 
    {
      this.testCounter += 1,
      this.sqlQuery += 'ABC '
    }
  }
}
