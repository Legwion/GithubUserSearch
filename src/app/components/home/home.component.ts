import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import { Router, Routes } from '@angular/router';
import { GithubService } from 'src/app/services/github.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  
  searchForm! : FormGroup;
  username! : string;



  constructor(private route : Router,
    ){  }

ngOnInit(): void {
// Form to control input data
  this.searchForm = new FormGroup({
    username : new FormControl(
      null,
      [Validators.required]
    )
  })




}
//Redirect to user/$username
 sendUser(){
   console.log(this.searchForm.value);
   this.username = this.searchForm.value.username;
    this.route.navigate([`user/${this.username}`]);
  }


}
