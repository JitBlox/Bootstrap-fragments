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
* A responsive footer with multiple sections (created with a Bootstrap Grid). Each section contains a
* list of navigation links.
* In order to turn the footer into a working navigation menu, configure each list item's Router Link
* Destination with a component in your app and make sure that your app has a Router Outlet.

*/
@Component({
  selector: 'app-footer-with-link-sections',
  standalone: true,
  templateUrl: './footer-with-link-sections.component.html',
  imports: [NgbNavModule, RouterLink, CommonModule]
})
export class FooterWithLinkSectionsComponent {

  constructor() {}
}
