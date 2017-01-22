import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
@Injectable()
export class MitCitySelectService {

  constructor(private http: Http) { }

  getAddress(){
     return this.http.request('./china_address.json').map( res => res.json() );
  }

}
