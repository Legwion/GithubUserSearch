import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GithubService } from '../../services/github.service';
import { ResponsiveService } from 'src/app/services/responsive.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.sass']
})
export class UserComponent implements OnInit {

  username! : string;
  repo! : string;
  foll! : string;
  search! : string;
  public userDetail!: any;
  repoDetail!: any;
  follDetail!: any;
  constructor(private active : ActivatedRoute,
              private githubService : GithubService,
              private route : Router,
              public responsiveService: ResponsiveService) { }

  ngOnInit(): void {
    
    this.active.params.subscribe(params =>{
      this.username = params['id'];
      // console.log("params = ", this.username);
    }) 

    this.githubService.getUser(this.username).subscribe({
      complete: () => {
        // console.log ("user found")
        ;},
      error: () => {alert("back to search page");this.route.navigate(['home']);},
      next: (data : any = []) => {this.userDetail = data;
        //  console.log(this.userDetail)
         ;},
    })

    this.githubService.getRepo(this.username).subscribe({
      complete: () => {
        //  console.log ("done repo")
        ;},
      // error: () => {alert("no repo");this.route.navigate(['home']);},
      next: (data2 : any = []) => {this.repoDetail = data2;
          // console.log(this.repoDetail)
         ;},
    })

    this.githubService.getFoll(this.username).subscribe({
      complete: () => {
        // console.log ("done followers")
        ;},
      // error: () => {alert("no repo");this.route.navigate(['home']);},
      next: (data3 : any = []) => {this.follDetail = data3.slice(0,5);

        //  console.log(this.follDetail)
         ;},
    })



  }

}
