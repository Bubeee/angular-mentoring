import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthorDto, Author } from './author';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../../../environments/environment';

@Injectable()
export class AuthorsService {
  constructor(private _http: HttpClient) {}

  public getAuthors(): Observable<Author[]> {
    const authorsUrl = `${environment.apiEndpoints.api}/authors`;

    return this._http
      .get<AuthorDto[]>(authorsUrl)
      .map(authors => authors.map(a => new Author(a)));
  }
}
