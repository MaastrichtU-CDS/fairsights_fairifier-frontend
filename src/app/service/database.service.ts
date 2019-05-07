import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { MessageService } from '../service/message.service';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private http: HttpClient,
                     private messageService: MessageService) { }

    private options = { headers: new HttpHeaders().set('Content-Type', 'application/json')};

    addDatabase(dataSource){
        var extra_Url = '/datasource/add'
        var url = environment.apiUrl + extra_Url
        console.log(url)
        let headers = new HttpHeaders({
            'Content-Type': 'application/text'
        });
        return this.http.post(url, dataSource, this.options)
            .subscribe(
                data => {

                    console.log("Adding Database Succesful", data),
                    this.messageService.changeMessage("Adding database is succesful")
                },

                error => {
                    console.log("Error ", error),
                    this.messageService.changeMessage("Adding database is unsuccesful. Error: " + error.message);
                }
            )
    }
}