import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MappingService {
  constructor(private http: HttpClient) { }

  mappingDownload(fileType) {
    var extra_Url = '/mapping/download?format=' + fileType
    var url = environment.apiUrl + extra_Url

    var contentDisposition;
    var filename;

    return this.http.get(url,
    {
      responseType: 'blob',
      observe: 'response'
    })
    .subscribe(
      response => (
        contentDisposition = response.headers.get('content-disposition'),
        filename = contentDisposition.split(';')[1].split('filename')[1].split('=')[1].trim(),
        console.log("Downloading mapping is succesful "),
        this.downloadFile(response.body, filename))
      ),

      error => (
        console.log("Error: ", error)
      )
  }

  downloadFile(data, name) {
    const match = navigator.userAgent.search(/(?:Edge|MSIE|Trident\/.*; rv:)/);
    if (match !== -1) {
        navigator.msSaveBlob(data, name);
    }
    else{
    const objectUrl: string = URL.createObjectURL(data);
    const a: HTMLAnchorElement = document.createElement('a') as HTMLAnchorElement;

    a.href = objectUrl;
    a.download = name;
    document.body.appendChild(a);
    a.click();

    document.body.removeChild(a);
    URL.revokeObjectURL(objectUrl);
    }
  }

  uploadMapping(mappingFile, currentFormat){
    var extra_Url = '/mapping/upload'
    if (currentFormat != ""){
      extra_Url = extra_Url + '?format=' + currentFormat
    }
    var formData = new FormData();
    formData.append('file', mappingFile)

    var url = environment.apiUrl + extra_Url

    return this.http.put(url, formData)
      .subscribe(
        data => {
          console.log("Uploading mapping is succesful ", data)
        },

        error => {
          console.log("Error ", error);
        }
      )
    }
}
