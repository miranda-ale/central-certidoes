import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ClarityModule } from '@clr/angular';
import '@cds/core/icon/register.js';
import { ClarityIcons, userIcon, cogIcon, cloudIcon } from '@cds/core/icon';
import { CommonModule } from '@angular/common';

ClarityIcons.addIcons(userIcon, cogIcon, cloudIcon);

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    ClarityModule,
    RouterOutlet,
    RouterLink
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-doc-cont';
}
