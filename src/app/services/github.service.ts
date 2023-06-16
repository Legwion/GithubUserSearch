import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, timer } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  userUrl: string = "https://api.github.com/users/";
  repoUrl: string = "/repos";
  follUrl: string = "/followers";
  searchUrl: string = "https://api.github.com/search/users?q=";

  constructor(private http: HttpClient) { }

  getUser(username: string): Observable<any> {
    return this.http.get(this.userUrl + username);
  }

  getRepo(username: string): Observable<any> {
    return this.http.get(this.userUrl + username + this.repoUrl);
  }

  getFoll(username: string): Observable<any> {
    return this.http.get(this.userUrl + username + this.follUrl);
  }

  getSearch(username: string): Observable<any> {

    return this.http.get(this.searchUrl + username + "in:login");

  }
}
