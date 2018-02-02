import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { AuthorDto, Author } from './author';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthorsService {
  constructor(private _http: HttpClient) {}

  public getAuthors(): Observable<Author[]> {
    const authorsUrl = `${environment.apiEndpoints.api}/authors`;

    return this._http
      .get<AuthorDto[]>(authorsUrl);
  }
}
