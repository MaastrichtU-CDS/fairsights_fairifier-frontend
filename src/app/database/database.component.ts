import { Component, OnInit } from '@angular/core';
import { MessageService } from '../service/message.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddDatabaseModalComponent } from '../modal/add-database-modal/add-database-modal.component'

@Component({
  selector: 'app-database',
  templateUrl: './database.component.html',
  styleUrls: ['./database.component.css']
})
export class DatabaseComponent implements OnInit {

    dataSource: string;

  constructor(public messageService: MessageService,
    private modalService: NgbModal) { }

    openDatabaseModal() {
      const modalRef = this.modalService.open(AddDatabaseModalComponent);
      modalRef.result.then((result) => {
        this.dataSource = "{ \"driver\": \"" + result.format + "\", \"name\": \"" + result.databasename + "\", \"password\": \"" + result.password + "\", \"url\": \"" + result.url + "\", \"username\": \"" + result.username + "\" }"
        console.log(result);
        console.log(result.databasename)
        console.log(result.format)
        console.log(result.password)
        console.log(result.url)
        console.log(result.username)

        console.log(this.dataSource)
      }) .catch ((error) => {
          console.log(error);
      });
    }

  ngOnInit() {
    this.messageService.changeMessage('');
  }
}
