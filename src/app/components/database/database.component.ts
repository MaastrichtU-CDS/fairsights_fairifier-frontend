import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddDatabaseModalComponent } from '../../modal/add-database-modal/add-database-modal.component';
import { MessageService } from '../../service/message.service';
import { DatabaseService } from '../../service/database.service';
import { DATABASEFORMATS } from '../../model/allDatabaseFormats';

@Component({
    selector: 'app-database',
    templateUrl: './database.component.html',
    styleUrls: ['./database.component.css']
})
export class DatabaseComponent implements OnInit {

    dataSource: string;
    driverUrl: string;
    driverUsed: string;

    constructor(
        public messageService: MessageService,
        private modalService: NgbModal,
        public databaseService: DatabaseService
    ) { }

    openDatabaseModal() {
        const modalRef = this.modalService.open(AddDatabaseModalComponent);
        modalRef.result.then((result) => {
            result.url = result.url.replace(/\\/g, '\\\\');
            for ( let i = 0, iLen = DATABASEFORMATS.length; i < iLen; i++) {
                if (DATABASEFORMATS[i].driver === result.format) {
                    this.driverUrl = DATABASEFORMATS[i].preUrl;
                    this.driverUsed = DATABASEFORMATS[i].fullDriver;
                }
            }

            result.url =  this.driverUrl + result.url;
            this.dataSource = '{ \"driverClassName\": \"' + this.driverUsed + '\", \"name\": \"' +
            result.databasename + '\", \"password\": \"' + result.password + '\", \"url\": \"' +
            result.url + '\", \"username\": \"' + result.username + '\" }';
            this.databaseService.addDatabase(this.dataSource, result.databasename);
            this.databaseService.getDatabase();

        }) .catch ((error) => {
            console.log(error),
            this.messageService.changeMessage(error.message);
        });
    }

    ngOnInit() {
        this.messageService.changeMessage('');
        this.databaseService.getDatabase();
    }
}
