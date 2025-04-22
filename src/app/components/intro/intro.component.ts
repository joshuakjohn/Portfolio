import { animate, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { ANGULAR, EXPRESS, GITHUB, INSTAGRAM, JAVASCRIPT, LINKEDIN, MONGODB, NODE, RIGHT_ARROW, TYPESCRIPT } from 'src/assets/svg-icons';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss'],
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
      trigger('slideInOut', [
        transition(':enter', [
          style({transform: 'translateX(-20px) rotate(180deg)', opacity: 0, }),
          animate('300ms ease-in',
            style({transform: 'translateX(0) rotate(180deg)', opacity: 1})
          )
        ]),
        transition(':leave', [
          animate('100ms ease-out',
            style({transform: 'translateX(-20px) rotate(180deg)', opacity: 0})
          )
        ])
      ]),
      trigger('slideRightInOut', [
        transition(':enter', [
          style({transform: 'translateX(200px)', opacity: 0, }),
          animate('300ms ease-in',
            style({transform: 'translateX(0)', opacity: 1})
          )
        ]),
        transition(':leave', [
          animate('100ms ease-out',
            style({transform: 'translateX(200px)', opacity: 0})
          )
        ])
      ])
    ]
})
export class IntroComponent {
  isShifted = false;
  know_more = false
  know_moreee = false
  know_less = true
  menu = false

  constructor(private sanitizer: DomSanitizer, private iconRegistry: MatIconRegistry){
    iconRegistry.addSvgIconLiteral('right-arrow', sanitizer.bypassSecurityTrustHtml(RIGHT_ARROW));
    iconRegistry.addSvgIconLiteral('javascript', sanitizer.bypassSecurityTrustHtml(JAVASCRIPT)),
    iconRegistry.addSvgIconLiteral('typescript', sanitizer.bypassSecurityTrustHtml(TYPESCRIPT)),
    iconRegistry.addSvgIconLiteral('angular', sanitizer.bypassSecurityTrustHtml(ANGULAR)),
    iconRegistry.addSvgIconLiteral('mongodb', sanitizer.bypassSecurityTrustHtml(MONGODB)),
    iconRegistry.addSvgIconLiteral('express', sanitizer.bypassSecurityTrustHtml(EXPRESS)),
    iconRegistry.addSvgIconLiteral('node', sanitizer.bypassSecurityTrustHtml(NODE)),
    iconRegistry.addSvgIconLiteral('github', sanitizer.bypassSecurityTrustHtml(GITHUB)),
    iconRegistry.addSvgIconLiteral('linkedin', sanitizer.bypassSecurityTrustHtml(LINKEDIN)),
    iconRegistry.addSvgIconLiteral('instagram', sanitizer.bypassSecurityTrustHtml(INSTAGRAM))
  }

  right_arrow_action(){
    this.isShifted = !this.isShifted
  }

  know_more_click(){
    if(this.know_less === true){
      this.know_less = !this.know_less
      setTimeout(() => {
        this.know_more = !this.know_more;
        setTimeout(() => {
          this.know_moreee = !this.know_moreee
        }, 400)
      }, 400)
    }
    else{
      this.know_moreee = !this.know_moreee
      setTimeout(() => {
        this.know_more = !this.know_more;
        setTimeout(() => {
          this.know_less = !this.know_less
        }, 400)
      }, 400)
    }
    
  }

  menu_click(){   
    this.menu = !this.menu;
  }
}
