import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
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


  /**
   * Get user list
   */
  public getUserList() {

  }
}