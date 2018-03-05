import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  public isNavbarScroll;
  constructor() {
    this.isNavbarScroll = false;
  }

  ngOnInit() {
    document.onscroll = function() {
    const windowYOffset = window.pageYOffset;
      if (windowYOffset > 500) {
        return true;
      }
    };
    if (document.onscroll) {
      this.isNavbarScroll = true;
    }
  }

}
