import { Component } from '@angular/core';
import { Router, NavigationEnd }    from '@angular/router';
import { ScrollService } from '../services/scroll.service';

@Component({
  selector: 'my-app',
  templateUrl: './../templates/app.component.html',
  styleUrls: ['./../styles/app.component.css'],
})
export class AppComponent  { 
  readonly changeClass: string = "change";
  readonly showClass: string = "show";

  constructor(private router: Router,
              private scroller: ScrollService) { 
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.scroller.scrollToTop();
      }
    });
  }

  toggleMenu(): void {
    document.getElementById("nav-toggle").classList.toggle(this.changeClass);
    document.getElementById("nav-main").classList.toggle(this.showClass);
  }

  hideMenu(): void {
    document.getElementById("nav-toggle").classList.remove(this.changeClass);
    document.getElementById("nav-main").classList.remove(this.showClass);
  }
}
