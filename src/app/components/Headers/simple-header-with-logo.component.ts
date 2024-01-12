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
* A basic header with a logo and navigation links.
* In order to turn the header into a working navigation menu, configure each nav link 's Router Link
* Destination with a component in your app and make sure that your app has a Router Outlet.
*/
@Component({
  selector: 'app-simple-header-with-logo',
  standalone: true,
  templateUrl: './simple-header-with-logo.component.html',
  styleUrls: ['./simple-header-with-logo.component.scss'],
  imports: [RouterLink, NgbNavModule, CommonModule]
})
export class SimpleHeaderWithLogoComponent {

  constructor() {}
}