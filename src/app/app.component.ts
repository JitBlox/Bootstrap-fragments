/**
* Generated by JitBlox - rapid interactive prototyping of modern web apps from your browser.
* Upgrade to a Pro plan to remove this header, see https://www.jitblox.com/plans for more.
* 
* Check out this JitBlox project, Bootstrap fragments, at
* https://www.jitblox.com/project/ydc6cYCqVz/bootstrap-fragments
*/

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

/**
* This application contains ready-to-use Bootstrap fragments that accelerate prototyping of modern web
* applications with JitBlox. All fragments in this project can be added to your Angular Bootstrap
* project directly from the JitBlox toolbox.
*/
@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [RouterLink, NgbNavModule, RouterLinkActive, RouterOutlet, CommonModule]
})
export class AppComponent {

  constructor() {}
}
