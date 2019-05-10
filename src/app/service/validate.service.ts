import { Injectable,} from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { MessageService } from '../service/message.service';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ValidateService {

    constructor(
        private http: HttpClient,
        private messageService: MessageService
        ) { }
        
        public dataArray = [];
        public dataKeyProps = [];
        queryChanged = ''
      
        convertData(dataKey) {
            this.dataArray = []
          let dataKeyProps = Object.keys(dataKey);
          
          let dataContent = [];
      
          for (let prop of dataKeyProps) {
      
              dataContent.push(dataKey[prop]);
          }
      
              let testArray = []
      
              let counterA = 0;
              let counterB = 0;
      
              while (counterB != dataContent[0].length)
              {
                  testArray = []
                  counterA = 0
                  while (counterA != dataContent.length)
                  {
                      testArray.push(dataContent[counterA][counterB])
                      counterA = counterA + 1
                  }
                  this.dataArray.push(testArray)
                  counterB = counterB + 1   
                  this.dataKeyProps = dataKeyProps
              }
      
              let a = 0;
              let b = 0;
              while (a != this.dataArray[0].length) {
                  while (b != this.dataArray.length) {
                      b = b+1
                  }
                  b = 0
                  a = a+1
              }
        }

  public testSqlQuery(amount, database, query) {
    this.queryChanged = query.replace(/\s/g,'%20'); 
    const extraUrl = "/datasource/query?dataSourceName=" + database + "&sqlQuery=" + this.queryChanged + "&resultsLimit=" + amount;
    const totalUrl = environment.apiUrl + extraUrl

    return this.http.get(totalUrl)
        .subscribe(
            response => (
                this.messageService.changeMessage("Test Succesfull"),
                this.convertData(response)
            ),
            error => (
                console.log("Test Unsuccesfull: ", error)
            )
        )
  }
  saveSqlQuery() {
      console.log("save")
  }
}
