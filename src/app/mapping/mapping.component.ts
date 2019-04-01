import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
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
  
  @ViewChild('labelImport')
  labelImport: ElementRef;
  allformats = FORMATS;
  selectedFormat = pickedFormat;
  mappingFile: any;
  useChosenFormat = false;

  downloadMapping() {
    this.mappingService.mappingDownload(this.selectedFormat[0].shortName);
  }
  
  mappingFileUpload($event) {
    this.mappingFile = $event.target.files[0]; 
	
	  this.labelImport.nativeElement.innerText 
	    = this.mappingFile.name;
  }

  mappingUpload(){
    if (this.mappingFile != undefined)
    {
      if (this.useChosenFormat == true){
      this.mappingService.uploadMapping(this.mappingFile, this.selectedFormat[0].shortName);
      }
      else{
        this.mappingService.uploadMapping(this.mappingFile, "")
      }
    }
    else{
      console.log("Please choose a file to upload")
    }
  }

  formatChanged(newFormat){
    this.selectedFormat = this.allformats.filter(function(Format) { return Format.shortName === newFormat})
  }

  toggleChoosenFormat(e){
    this.useChosenFormat = e.target.checked;
  }
}
