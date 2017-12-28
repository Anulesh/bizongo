import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
@Injectable()
export class ProductServiceService {
  ebayUrl = 'http://svcs.ebay.com/services/search/FindingService/v1/?';
  opName = 'findItemsByKeywords';
  serVer = '1.0.0';
  secKey = environment.appKey;
  respFor =  'JSON';
  entCount = 40;

  private finalData = new BehaviorSubject<any>('');
  finalDO = this.finalData.asObservable();

  constructor(private http: HttpClient) { }

  getData(query: String) {
    this.finalData.next(this.http.get(this.ebayUrl + 'OPERATION-NAME=' + this.opName + '&SERVICE-VERSION=' + this.serVer + '&SECURITY-APPNAME=' + this.secKey + '&RESPONSE-DATA-FORMAT=' + this.respFor + '&keywords=' + query + '&paginationInput.entriesPerPage=' + this.entCount));
  }
}
