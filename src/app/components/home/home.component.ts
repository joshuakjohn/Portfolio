import { animate, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { Navigation, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms ease-in', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('300ms ease-out', style({ opacity: 0 }))
      ])
    ]),
  ]
})

export class HomeComponent {

  menu = false
  currectRoute: string = '';

  constructor(private router: Router){

  }

  ngOnInit() {
    this.router.events.subscribe(() => {
        this.currectRoute = this.router.url;
    });
  }

  menu_click(choise: string) {  
    if(choise === 'outer'){
      this.menu = false
    } else{
      this.menu = !this.menu;
    }
  }

  navigate(url: string){
    this.router.navigate([url]);
  }

}
