import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'GithubUserSearch';
  isDarkTheme = true; // Puedes establecer el tema oscuro como predeterminado


  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
  }

}
