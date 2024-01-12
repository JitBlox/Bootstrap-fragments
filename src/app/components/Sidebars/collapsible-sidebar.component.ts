/**
* Generated by JitBlox - rapid interactive prototyping of modern web apps from your browser.
* Upgrade to a Pro plan to remove this header, see https://www.jitblox.com/plans for more.
* 
* Check out this JitBlox project, Bootstrap fragments, at
* https://www.jitblox.com/project/ydc6cYCqVz/bootstrap-fragments
*/

import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgbCollapse, NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

/**
* A Sidebar with multiple collapsible navigation sections, created with the ng-bootstrap Collapse
* directive.
* In order to turn the Sidebar into a working navigation menu, configure each link 's Router Link
* Destination with a component in your app and make sure that your app has a Router Outlet.
*/
@Component({
  selector: 'app-collapsible-sidebar',
  standalone: true,
  templateUrl: './collapsible-sidebar.component.html',
  styleUrls: ['./collapsible-sidebar.component.scss'],
  imports: [NgbCollapseModule, RouterLink, CommonModule]
})
export class CollapsibleSidebarComponent {
  @ViewChild('collapseHomeCollapsible') public collapseHomeCollapsible!: NgbCollapse;

  @ViewChild('collapseDashboardCollapsible') public collapseDashboardCollapsible!: NgbCollapse;

  @ViewChild('collapseOrdersCollapsible') public collapseOrdersCollapsible!: NgbCollapse;

  @ViewChild('collapseAccountCollapsible') public collapseAccountCollapsible!: NgbCollapse;

  constructor() {}

  public onButton1Click($event: MouseEvent): void {
    this.collapseHomeCollapsible.toggle();
  }

  public onButton2Click($event: MouseEvent): void {
    this.collapseDashboardCollapsible.toggle();
  }

  public onButton3Click($event: MouseEvent): void {
    this.collapseOrdersCollapsible.toggle();
  }

  public onButton4Click($event: MouseEvent): void {
    this.collapseAccountCollapsible.toggle();
  }
}
