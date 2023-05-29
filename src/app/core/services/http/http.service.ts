import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';

@Injectable()
export class HttpService {
  private baseUrl: string;
  constructor(
    private http: HttpClient
  ) {
    this.baseUrl = environment.apiURL;
  }

  /**
   * @name createHeader
   * @param data
   * @returns header if there's need of an interception 
   */
  public createHeader(data: any) {
    const header: HttpHeaders = new HttpHeaders({
      'api-version': data
    });
    return header;
  }

  public httpGetRequest<t>(url: string, version: string = '1.1.0'): Observable<any> {
    const interceptableHeader: HttpHeaders = this.createHeader(version);
    return this.http.get<t>(url, { headers: interceptableHeader });
  }

  public httpPostRequest<t>(url: string, requestBody: any, version: string = '1.1.0'): Observable<any> {
    const interceptableHeader: HttpHeaders = this.createHeader(version);
    return this.http.post<t>(url, requestBody, { headers: interceptableHeader });
  }

  public httpPutRequest<t>(url: string, requestBody: any, version: string = '1.1.0'): Observable<any> {
    const interceptableHeader: HttpHeaders = this.createHeader(version);
    return this.http.put<t>(url, requestBody, { headers: interceptableHeader });
  }

  public httpDeleteRequest<t>(url: string, requestBody: any, version: string = '1.1.0'): Observable<any> {
    const interceptableHeader: HttpHeaders = this.createHeader(version);
    return this.http.delete<t>(url, { headers: interceptableHeader });
  }
}