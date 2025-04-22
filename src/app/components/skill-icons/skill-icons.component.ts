import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skill-icons',
  templateUrl: './skill-icons.component.html',
  styleUrls: ['./skill-icons.component.scss']
})
export class SkillIconsComponent {

  @Input() percent = 80;
  @Input() iconName = '';
  @Input() label = ''
  dashoffset = 282.6;

  ngOnInit(){
    const circumference = 2 * Math.PI * 45;
    const targetOffset = circumference - (this.percent/100) * circumference;

    setTimeout(() => {
      this.dashoffset = targetOffset;
    }, 600)

  }

}
