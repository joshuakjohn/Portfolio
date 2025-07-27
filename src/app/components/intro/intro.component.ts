import 'hammerjs';
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
    trigger('combinedAnimation', [
      // Fade In
      transition('void => fade', [
        style({ opacity: 0 }),
        animate('300ms ease-in', style({ opacity: 1 }))
      ]),
      // Fade Out
      transition('fade => void', [
        animate('300ms ease-out', style({ opacity: 0 }))
      ]),
  
      // Slide Left In
      transition('void => slide', [
        style({ transform: 'translateX(-100vw)', opacity: 0 }),
        animate('500ms ease-in-out', style({ transform: 'translateX(0)', opacity: 1 }))
      ]),
      // Slide Left Out
      transition('slide => void', [
        animate('500ms ease-in-out', style({ transform: 'translateX(-200vw)', opacity: 0 }))
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
          style({transform: 'translateX(200vw)', opacity: 1, }),
          animate('500ms ease-in-out',
            style({transform: 'translateX(0)', opacity: 1})
          )
        ]),
        transition(':leave', [
          animate('500ms ease-in-out',
            style({transform: 'translateX(200vw)', opacity: 1})
          )
        ])
      ]),
      trigger('slideLeftInOut', [
        transition(':enter', [
          style({transform: 'translateX(-100vw)', opacity: 1, }),
          animate('500ms ease-in-out',
            style({transform: 'translateX(0)', opacity: 1})
          )
        ]),
        transition(':leave', [
          animate('500ms ease-in-out',
            style({transform: 'translateX(-200vw)', opacity: 1})
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
  currentAnimation = 'fade';

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

  swipeLeft(){
    if(this.isShifted === false)
      this.right_arrow_action();
  }

  swipeRight(){
    if(this.isShifted === true)
      this.right_arrow_action();
  }

  swipeDown(){
    if(this.know_more === true)
      this.know_more_click()
  }

  right_arrow_action(){
    this.setAnimation('slide')    
    setTimeout(() => {
      if(this.know_more === false)
      this.isShifted = !this.isShifted
    });
  }

  know_more_click(){
    this.setAnimation('fade')
    setTimeout(() => {
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
    });
    
  }

  menu_click(){   
    this.menu = !this.menu;
  }

  setAnimation(type: string) {
    setTimeout(() => {
      this.currentAnimation = type;
    });
  }
}
