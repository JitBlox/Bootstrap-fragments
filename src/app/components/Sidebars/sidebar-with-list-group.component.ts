/**
* Generated by JitBlox - rapid interactive prototyping of modern web apps from your browser.
* Upgrade to a Pro plan to remove this header, see https://www.jitblox.com/plans for more.
* 
* Check out this JitBlox project, Bootstrap fragments, at
* https://www.jitblox.com/project/ydc6cYCqVz/bootstrap-fragments
*/

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

/**
* A scrollable Sidebar that contains a list of actions using the Action list group. This Sidebar does
* not contain navigation links by default.
*/
@Component({
  selector: 'app-sidebar-with-list-group',
  standalone: true,
  templateUrl: './sidebar-with-list-group.component.html',
  styleUrls: ['./sidebar-with-list-group.component.scss'],
  host: { 'class': 'overflow-y-hidden h-100' },
  imports: [CommonModule]
})
export class SidebarWithListGroupComponent {

  constructor() {}
}
