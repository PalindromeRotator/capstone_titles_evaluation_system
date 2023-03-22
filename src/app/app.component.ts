import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  dashboardActive = '';
  profileActive = '';
  titlesActive = '';
  accountsActive = '';
  panelActive = '';
  reportActive = '';
  contentActive = '';
  showNavFlag = false;
  constructor(private router: Router) {

  }
  ngOnInit(): void {

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        if (event.url !== '/' && event.url !== 'register' && event.url !== 'forgot-password') {
          this.showNavFlag = true;
          this.dashboardActive = event.url == '/dashboard' ? 'active' : '';
          this.profileActive = event.url == '/profile' ? 'active' : '';
          this.titlesActive = event.url == '/titles' ? 'active' : '';
          this.accountsActive = event.url == '/accounts' ? 'active' : '';
          this.panelActive = event.url == '/panels' ? 'active' : '';
          this.reportActive = event.url == '/reports' ? 'active' : '';
          this.contentActive = event.url == '/contents' ? 'active' : '';
        }

      }
    });
  }
}
