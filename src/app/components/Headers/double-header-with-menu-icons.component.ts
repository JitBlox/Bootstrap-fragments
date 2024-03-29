/**
* Generated by JitBlox - rapid interactive prototyping of modern web apps from your browser.
* Upgrade to a Pro plan to remove this header, see https://www.jitblox.com/plans for more.
* 
* Check out this JitBlox project, Bootstrap fragments, at
* https://www.jitblox.com/project/ydc6cYCqVz/bootstrap-fragments
*/

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

/**
* A 2-row header with large navigation icons on the first row and a search input and login/sign-up
* buttons on the second.
* In order to turn the header into a working navigation menu, configure each nav link 's Router Link
* Destination with a component in your app and make sure that your app has a Router Outlet.
*/
@Component({
  selector: 'app-double-header-with-menu-icons',
  standalone: true,
  templateUrl: './double-header-with-menu-icons.component.html',
  styleUrls: ['./double-header-with-menu-icons.component.scss'],
  imports: [NgbNavModule, RouterLink, CommonModule]
})
export class DoubleHeaderWithMenuIconsComponent {

  constructor() {}
}
