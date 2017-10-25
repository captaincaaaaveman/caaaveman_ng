import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import { environment } from '../../../environments/environment';

import 'rxjs/add/operator/toPromise';

import { BlogEntry } from '../domain/blog-entry';

@Injectable()
export class BlogService {
  
 private backendUrl = `${environment.backendUrl}`;
//  private backendUrl = `http://localhost:8080`;

  constructor(private http: Http) { }

  getBlogEntry(): Promise<BlogEntry> {
    const url = `${this.backendUrl}/markdown`;
    console.log('Looking up ', url); 
    return this.http.get(url, this.getRequestOptions())
               .toPromise()
               .then( response => {
                 console.log(response);
                 return response.json() as BlogEntry;
                } );
  }


  getRequestOptions(): RequestOptions {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return new RequestOptions({ headers: headers });
  }
}
