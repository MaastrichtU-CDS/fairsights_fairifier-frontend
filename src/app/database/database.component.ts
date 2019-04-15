import { Component, OnInit } from '@angular/core';
import { MessageService } from '../service/message.service';

@Component({
  selector: 'app-database',
  templateUrl: './database.component.html',
  styleUrls: ['./database.component.css']
})
export class DatabaseComponent implements OnInit {

  constructor(private messageService: MessageService) { }

  addDatabase() {
    this.messageService.changeMessage('Database Added');
  }

  formatChanged() {
    console.log("Format Changed"),
    this.messageService.changeMessage('Format Changed') 
  }

  nameChanged(newName){
    console.log('Name Changed'),
    this.messageService.changeMessage('Name Changed')
  }

  urlChanged(newUrl){
    console.log('Url Changed'),
    this.messageService.changeMessage('Url Changed')
  }

  usernameChanged(newUsername){
    console.log('Username Changed'),
    this.messageService.changeMessage('Username Changed')
  }

  passwordChanged(newPassword){
    console.log('Password Changed'),
    this.messageService.changeMessage('Password Changed')
  }

  ngOnInit() {
    this.messageService.changeMessage('');
  }
}
