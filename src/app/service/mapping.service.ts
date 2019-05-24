import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { MessageService } from '../service/message.service';

@Injectable({
        providedIn: 'root'
})
export class MappingService {

    constructor(
        private http: HttpClient,
        private messageService: MessageService
    ) { }

    mappingDownload(fileType) {
        const extraUrl = '/mapping/download?format=' + fileType;
        const url = environment.apiUrl + extraUrl;

        let contentDisposition;
        let filename;

        return this.http.get(url,
        {
            responseType: 'blob',
            observe: 'response'
        })
        .subscribe (
            response => (
                contentDisposition = response.headers.get('content-disposition'),
                filename = contentDisposition.split(';')[1].split('=')[1].trim(),
                this.messageService.changeMessage('Downloading mapping is succesful'),
                this.downloadFile(response.body, filename)
            ),

            error => (
                console.log(error),
                this.messageService.changeMessage('Downloading mapping is unsuccesful, Error: ' + error.message)
            )
        );
    }

    downloadFile(data, name) {
        const match = navigator.userAgent.search(/(?:Edge|MSIE|Trident\/.*; rv:)/);
        if (match !== -1) {
            navigator.msSaveBlob(data, name);
        } else {
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

    uploadMapping(mappingFile, currentFormat) {
        let extraUrl = '/mapping/upload';
        if (currentFormat !== '') {
            extraUrl = extraUrl + '?format=' + currentFormat;
        }
        const formData = new FormData();
        formData.append('file', mappingFile);

        const url = environment.apiUrl + extraUrl;

        return this.http.put(url, formData)
        .subscribe(
            data => {
                console.log('Uploading mapping is succesful ', data);
                this.messageService.changeMessage('Uploading mapping is succesful');
            },
            error => {
                console.log(error),
                this.messageService.changeMessage('Uploading mapping is unsuccesful, Error: ' + error.message);
            }
        );
    }
}
