import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessageService } from '../service/message.service';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class DatabaseService {

    constructor(
        private http: HttpClient,
        private messageService: MessageService
    ) { }

    private options = { headers: new HttpHeaders().set('Content-Type', 'application/json')};
    public databaseArray = [];

    addDatabase(dataSource, databaseName) {
        const extraUrl = '/datasource/add';
        const url = environment.apiUrl + extraUrl;

        return this.http.post(url, dataSource, this.options)
            .subscribe(
                data => {
                    this.getDatabases(),
                    console.log('Adding Database Succesful', data),
                    this.messageService.changeMessage('Adding database ' + databaseName + ' is succesful');
                },

                error => {
                    console.log('Error ', error),
                    this.messageService.changeMessage('Adding database is unsuccesful. Error: ' + error.message);
                }
            );
        }

    getDatabases() {
        const extraUrl = '/datasources';
        const url = environment.apiUrl + extraUrl;

        return this.http.get(url)
            .subscribe(
                data => {
                    this.putDatabasesInArray(data);
                },
                error => {
                    console.log('Error: ', error);
                }
            );
    }
    
    
    putDatabasesInArray(inputArray) {
        this.databaseArray = inputArray;
    }
}
