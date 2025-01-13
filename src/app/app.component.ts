import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ClarityIcons, cloudIcon, cogIcon, folderIcon, homeIcon, popOutIcon, userIcon } from '@cds/core/icon';
import '@cds/core/icon/register.js';
import { ClarityModule } from '@clr/angular';

ClarityIcons.addIcons(userIcon, cogIcon, cloudIcon, homeIcon, folderIcon, popOutIcon);

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
