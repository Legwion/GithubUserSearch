import { Component, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';
import { AppComponent } from '../../app.component';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isDarkThemeActive = false;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver,
    @Inject(DOCUMENT) private document: Document,
    private router: Router,
     private route: ActivatedRoute,
     private appComponent: AppComponent) {
    
  }
//Function to add or remove the style "dark-mode" to the body of the page
  onChange(newValue: boolean): void {
    if (newValue) {
      this.document.body.classList.add('dark-mode');
    } else {
      this.document.body.classList.remove('dark-mode');
    }
  }


  toggleTheme() {
    this.appComponent.toggleTheme();
  }
  
      //Function to set active in navbar
      isRouteActive(routePath: string): boolean {
        return this.router.isActive(routePath, true);
      }
}
