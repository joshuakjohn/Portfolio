import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import {
  ANGULAR,
  EXPRESS,
  GITHUB,
  INSTAGRAM,
  JAVASCRIPT,
  LINKEDIN,
  MONGODB,
  NODE,
  RIGHT_ARROW,
  TYPESCRIPT
} from 'src/assets/svg-icons';

@Component({
  selector: 'app-skill-icons',
  templateUrl: './skill-icons.component.html',
  styleUrls: ['./skill-icons.component.scss']
})
export class SkillIconsComponent {
  icons = ['Angular', 'javascript', 'typescript', 'node', 'mongodb', 'typescript', 'node', 'Mongo DB']; // Add more as needed
  rotationStates: boolean[] = [];
  popInDelays: string[] = []; // 💡 Store animation delays as strings like '2.4s'

  constructor(private sanitizer: DomSanitizer, private iconRegistry: MatIconRegistry) {
    // SVG icon registration (same as before)...
    iconRegistry.addSvgIconLiteral('right-arrow', sanitizer.bypassSecurityTrustHtml(RIGHT_ARROW));
    iconRegistry.addSvgIconLiteral('Javascript', sanitizer.bypassSecurityTrustHtml(JAVASCRIPT)),
    iconRegistry.addSvgIconLiteral('Typescript', sanitizer.bypassSecurityTrustHtml(TYPESCRIPT)),
    iconRegistry.addSvgIconLiteral('Angular', sanitizer.bypassSecurityTrustHtml(ANGULAR)),
    iconRegistry.addSvgIconLiteral('Mongo DB', sanitizer.bypassSecurityTrustHtml(MONGODB)),
    iconRegistry.addSvgIconLiteral('express', sanitizer.bypassSecurityTrustHtml(EXPRESS)),
    iconRegistry.addSvgIconLiteral('Node', sanitizer.bypassSecurityTrustHtml(NODE)),
    iconRegistry.addSvgIconLiteral('github', sanitizer.bypassSecurityTrustHtml(GITHUB)),
    iconRegistry.addSvgIconLiteral('linkedin', sanitizer.bypassSecurityTrustHtml(LINKEDIN)),
    iconRegistry.addSvgIconLiteral('instagram', sanitizer.bypassSecurityTrustHtml(INSTAGRAM))

    // Initialize rotation states
    this.rotationStates = this.icons.map(() => false);

    // 🔁 Assign a random delay (0–3s) for each icon
    this.popInDelays = this.icons.map(() => {
      const delay = Math.random() * 3;
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

