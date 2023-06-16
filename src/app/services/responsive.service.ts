import { Injectable } from '@angular/core';
import { BreakpointObserver, Breakpoints,BreakpointState } from '@angular/cdk/layout';

@Injectable({
  providedIn: 'root'
})
export class ResponsiveService {
  public isPC: boolean;

  constructor(private breakpointObserver: BreakpointObserver) {
    this.isPC = false;

    this.breakpointObserver
      .observe(['(min-width: 600px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {          
          this.isPC = true; 
          // console.log('True more than 600px')
        } else {
          this.isPC = false;
          // console.log('False less than 600px')

        }
      });


    // this.breakpointObserver.observe([Breakpoints.Handset, Breakpoints.Large])
    //   .subscribe(result => {
    //     this.isPC = !result.matches;
    //   });
  }
}
