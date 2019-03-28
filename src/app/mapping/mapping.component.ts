import { Component, OnInit } from '@angular/core';
import { MappingService } from '../service/mapping.service';

@Component({
  selector: 'app-mapping',
  templateUrl: './mapping.component.html',
  styleUrls: ['./mapping.component.css']
})
export class MappingComponent implements OnInit {

  constructor(private mappingService: MappingService) { }

  ngOnInit() {
  }

  downloadMapping() {
    this.mappingService.mappingDownload("N3");
  }

}
