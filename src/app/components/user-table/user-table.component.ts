import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GithubService } from 'src/app/services/github.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.sass']
})
export class UserTableComponent implements OnInit {
  searchUrl: string = 'https://api.github.com/search/users?q=';
  users: any[] = [];
  username: string = '';
  searchForm2!: FormGroup;

  //New
  myControl = new FormControl('');
  options = this.users;
  filteredOptions!: Observable<string[]>;


  constructor(
    private http: HttpClient,
    private githubService: GithubService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.searchForm2 = new FormGroup({
      username: new FormControl(null, [Validators.required])
    });

    this.searchForm2.get('username')?.valueChanges.subscribe((value: string) => {
      this.username = value;
      this.githubService.getSearch(this.username).subscribe((response: any) => {
        this.users = response.items.slice(0, 7);
        // console.log(this.users);
      });
    });

 //New
 this.filteredOptions = this.myControl.valueChanges.pipe(
  startWith(''),
  map(value => this._filter(value || '')),
);

  }

  sendUser() {
    // console.log(this.searchForm2.value);
    this.username = this.searchForm2.value.username;
    this.githubService.getSearch(this.username).subscribe((response: any) => {
      this.users = response.items.slice(0, 7);
    });
  }

  onUserClick(user: any) {
    const userUsername = user.login;
    this.router.navigate([`user/${userUsername}`]);
  }



//New 


private _filter(value: string): string[] {
  const filterValue = value.toLowerCase();

  return this.options.filter(option => option.toLowerCase().includes(filterValue));
}
}
