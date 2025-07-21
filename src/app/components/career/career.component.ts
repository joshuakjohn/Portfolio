import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon'
import { trigger, transition, style, animate, state } from '@angular/animations';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.scss'],
  animations: [
    trigger('expandCollapse', [
      state('expanded', style({
        height: '*',
        opacity: 1,
        overflow: 'hidden',
      })),
      state('collapsed', style({
        height: '0px',
        opacity: 0,
        overflow: 'hidden',
      })),
      transition('expanded <=> collapsed', [
        animate('400ms ease-in-out')
      ])
    ]),
    trigger('headingMargin', [
    state('expanded', style({ margin: '*' })),
    state('collapsed', style({ margin: '0px' })),
    transition('expanded <=> collapsed', animate('400ms ease-in-out'))
  ]),
  trigger('fadeInOut', [
          transition(':enter', [
            style({ opacity: 0 }),
            animate('300ms ease-in', style({ opacity: 1 }))
          ]),
          transition(':leave', [
            animate('300ms ease-out', style({ opacity: 0 }))
          ])
        ])
  ]
})
export class CareerComponent {

  expanded_clg: boolean = false;
  expanded_jsp: boolean = false;
  expanded_bl: boolean = false;
  expanded_wip: boolean = false;

  toggleExpansion(choise: string) {
    if (choise === 'clg')
      this.expanded_clg = !this.expanded_clg;
    if (choise === 'jsp')
      this.expanded_jsp = !this.expanded_jsp;
    if (choise === 'bl')
      this.expanded_bl = !this.expanded_bl;
    if (choise === 'wip')
      this.expanded_wip = !this.expanded_wip;
  }

}
