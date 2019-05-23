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

    addDatabase(dataSource, databaseName) {
        const extraUrl = '/datasource/add';
        const url = environment.apiUrl + extraUrl;
        console.log(databaseName);

        return this.http.post(url, dataSource, this.options)
            .subscribe(
                data => {
                    console.log('Adding Database Succesful', data),
                    this.messageService.changeMessage('Adding database ' + databaseName + ' is succesful');
                },

                error => {
                    console.log('Error ', error),
                    this.messageService.changeMessage('Adding database is unsuccesful. Error: ' + error.message);
                }
            );
        }
}
