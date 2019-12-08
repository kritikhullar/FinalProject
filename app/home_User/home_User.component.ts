import { NavService } from '../services/nav.service';
import { Router, NavigationStart } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { filter } from 'minimatch';

@Component({
  selector: 'app-homeUser',
  templateUrl: './home_User.component.html',
  styleUrls: ['./home_user.component.css']
})
export class HomeUserComponent implements OnInit {
  customOptions: any = {
    loop: true,
    singleItem: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 500,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }

  constructor(private router: Router,
              private nav: NavService) { 
  }

  ngOnInit() {
    this.router.events.subscribe(
      (event: NavigationStart) => {
        if(event.navigationTrigger == "popstate"){
            console.log(event.navigationTrigger);
            this.nav.logged = false;
        }
        
      }
    )
  }

}
