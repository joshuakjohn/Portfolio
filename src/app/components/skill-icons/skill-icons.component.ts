import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import {
  ANGULAR,
  CSS,
  DOCKER,
  EXPRESS,
  GIT,
  GITHUB,
  HTML,
  INSTAGRAM,
  JAVA,
  JAVASCRIPT,
  LINKEDIN,
  MONGODB,
  MS,
  NODE,
  PYTHON,
  RESTAPI,
  RIGHT_ARROW,
  SPRING,
  SQL,
  TYPESCRIPT
} from 'src/assets/svg-icons';

@Component({
  selector: 'app-skill-icons',
  templateUrl: './skill-icons.component.html',
  styleUrls: ['./skill-icons.component.scss']
})
export class SkillIconsComponent {
  icons = ['Angular', 'Javascript', 'Typescript', 'Node.js', 'MongoDB', 'Express', 'Java', 'Spring Boot', 'HTML', 'CSS', 'SQL', 'REST API', 'Microservices', 'Git', 'Docker', 'Python']; // Add more as needed
  rotationStates: boolean[] = [];
  popInDelays: string[] = []; // 💡 Store animation delays as strings like '2.4s'

  constructor(private sanitizer: DomSanitizer, private iconRegistry: MatIconRegistry) {
    // SVG icon registration (same as before)...
    iconRegistry.addSvgIconLiteral('right-arrow', sanitizer.bypassSecurityTrustHtml(RIGHT_ARROW));
    iconRegistry.addSvgIconLiteral('Docker', sanitizer.bypassSecurityTrustHtml(DOCKER));
    iconRegistry.addSvgIconLiteral('Python', sanitizer.bypassSecurityTrustHtml(PYTHON));
    iconRegistry.addSvgIconLiteral('Git', sanitizer.bypassSecurityTrustHtml(GIT));
    iconRegistry.addSvgIconLiteral('Microservices', sanitizer.bypassSecurityTrustHtml(MS));
    iconRegistry.addSvgIconLiteral('Spring Boot', sanitizer.bypassSecurityTrustHtml(SPRING));
    iconRegistry.addSvgIconLiteral('REST API', sanitizer.bypassSecurityTrustHtml(RESTAPI));
    iconRegistry.addSvgIconLiteral('SQL', sanitizer.bypassSecurityTrustHtml(SQL));
    iconRegistry.addSvgIconLiteral('CSS', sanitizer.bypassSecurityTrustHtml(CSS));
    iconRegistry.addSvgIconLiteral('HTML', sanitizer.bypassSecurityTrustHtml(HTML));
    iconRegistry.addSvgIconLiteral('Java', sanitizer.bypassSecurityTrustHtml(JAVA)),
    iconRegistry.addSvgIconLiteral('Javascript', sanitizer.bypassSecurityTrustHtml(JAVASCRIPT)),
    iconRegistry.addSvgIconLiteral('Typescript', sanitizer.bypassSecurityTrustHtml(TYPESCRIPT)),
    iconRegistry.addSvgIconLiteral('Angular', sanitizer.bypassSecurityTrustHtml(ANGULAR)),
    iconRegistry.addSvgIconLiteral('MongoDB', sanitizer.bypassSecurityTrustHtml(MONGODB)),
    iconRegistry.addSvgIconLiteral('Express', sanitizer.bypassSecurityTrustHtml(EXPRESS)),
    iconRegistry.addSvgIconLiteral('Node.js', sanitizer.bypassSecurityTrustHtml(NODE)),
    iconRegistry.addSvgIconLiteral('github', sanitizer.bypassSecurityTrustHtml(GITHUB)),
    iconRegistry.addSvgIconLiteral('linkedin', sanitizer.bypassSecurityTrustHtml(LINKEDIN)),
    iconRegistry.addSvgIconLiteral('instagram', sanitizer.bypassSecurityTrustHtml(INSTAGRAM))

    // Initialize rotation states
    this.rotationStates = this.icons.map(() => false);

    // 🔁 Assign a random delay (0–3s) for each icon
    this.popInDelays = this.icons.map(() => {
      const delay = (Math.random() * 2)+ 0.5; // Random delay between 0.5s and 3.5s
      return `${delay.toFixed(2)}s`; // e.g., '2.48s'
    });
  }

  startRotation(index: number) {
    this.rotationStates[index] = true;
  }

  stopRotation(index: number) {
    this.rotationStates[index] = false;
    setTimeout(() => {
      this.rotationStates[index] = true;
    }, 10);
  }
}

