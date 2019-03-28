import { Component, OnInit } from '@angular/core';
import { MappingService } from '../service/mapping.service';
import { FORMATS, pickedFormat } from '../model/allformats';

@Component({
  selector: 'app-mapping',
  templateUrl: './mapping.component.html',
  styleUrls: ['./mapping.component.css']
})
export class MappingComponent implements OnInit {

  constructor(private mappingService: MappingService) { }

  ngOnInit() {
  }
  
  allformats = FORMATS;
  selectedFormat = pickedFormat;
  mappingFile: any;

  downloadMapping() {
    this.mappingService.mappingDownload(this.selectedFormat[0].shortName);
  }
  
  mappingFileUpload($event) {
    this.mappingFile = $event.target.files[0];
    console.log(this.mappingFile)
    
  }

  mappingUpload(){
    if (this.mappingFile != undefined)
    {
      var chosenFormat = ""
      this.mappingService.uploadMapping(this.mappingFile, chosenFormat)
      
    }
    else{
      console.log("Please choose a file to upload")
    }
  }

  formatChanged(newFormat){
    this.selectedFormat = this.allformats.filter(function(Format) { return Format.shortName === newFormat})
  }
}
