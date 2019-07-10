import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
    queryChanged = '';
    public currentQuery = '';
    public valueChanged;

    getSqlQuery() {
        const extraUrl = '/mapping/sqlquery';
        const totalUrl = environment.apiUrl + extraUrl;

        this.http.get(totalUrl, {responseType: 'text'})
        .subscribe (
            data => (
                this.messageService.changeMessage('Sql Query Received'),
                console.log(data),
                this.currentQuery = data
            ),

            error => (
                console.log(error),
                this.messageService.changeMessage('Sql unsuccesfully received: ' + error.message)
            )
        );
    }

    convertData(dataKey) {
        this.dataArray = [];
        const dataKeyProps = Object.keys(dataKey);
        const dataContent = [];
        for (const prop of dataKeyProps) {
            dataContent.push(dataKey[prop]);
        }
        let testArray = [];
        let counterA = 0;
        let counterB = 0;
        while (counterB !== dataContent[0].length) {
            testArray = [];
            counterA = 0;
            while (counterA !== dataContent.length) {
                testArray.push(dataContent[counterA][counterB]);
                counterA = counterA + 1;
            }
            this.dataArray.push(testArray);
            counterB = counterB + 1;
            this.dataKeyProps = dataKeyProps;
        }
    }

    changeValue() {
        if (this.valueChanged === false) {
            this.messageService.validateSaveSuccesful = true;
            console.log(this.messageService.validateSaveSuccesful);
        }
    }

    testSqlQuery(amount, database, query) {
        this.queryChanged = query.replace(/\s/g, '%20');
        const extraUrl = '/datasource/query?dataSourceName=' + database + '&sqlQuery=' + this.queryChanged + '&resultsLimit=' + amount;
        const totalUrl = environment.apiUrl + extraUrl;

        this.convertUrl(totalUrl)

        return this.http.get(totalUrl)
            .subscribe(
            response => (
                this.messageService.changeMessage('Test Succesful'),
                this.convertData(response),
                this.messageService.validateTestSuccesful = true,
                this.changeValue()
            ),
            error => (
                this.messageService.changeMessage('Test Unsuccesful: ' + error.message),
                console.log(error),
                this.messageService.validateTestSuccesful = false
            )
        );
    }

    convertUrl(conversion) {
        conversion = conversion.replace(/\$/g, '%24').replace(/\&/g, '%26').replace(/\+/g, '%2B')
        .replace(/\,/g, '%2C').replace(/\//g, '%2F').replace(/\:/g, '%3A').replace(/\;/g, '%3B')
        .replace(/\=/g, '%3D').replace(/\?/g, '%3F').replace(/\@/g, '%40');
        return conversion;
    }

    saveSqlQuery() {
        this.queryChanged = this.currentQuery.replace(/\s/g, '%20');
        const extraUrl = '/mapping/sqlquery?newSqlQuery=' + this.queryChanged;
        const totalUrl = environment.apiUrl + extraUrl;

        this.http.put(totalUrl, this.currentQuery)
        .subscribe(
            response => (
                this.messageService.changeMessage('Query Save Succesful'),
                console.log(response),
                this.messageService.validateSaveSuccesful = true
            ),

            error => (
                console.log(error),
                this.messageService.changeMessage('Query saved failed. Error: ' + error.message)
            )
        );
    }
}
