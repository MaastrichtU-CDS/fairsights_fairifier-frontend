import { Injectable } from '@angular/core';
import { DatabaseService } from './database.service';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetDatabaseService {

  constructor(
    private http: HttpClient,
    public databaseService: DatabaseService
  ) { }

  public getDatabaseArray = [];

  getDatabase() {
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
        this.getDatabaseArray = inputArray;
        console.log(this.getDatabaseArray)
    }
}
