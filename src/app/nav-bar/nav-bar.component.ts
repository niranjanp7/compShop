import { Component, OnInit } from '@angular/core';
import { faBars, faHome } from '@fortawesome/free-solid-svg-icons';
import { ControlsService } from '../services/controls.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.sass']
})
export class NavBarComponent implements OnInit {

  /* Icons */
  barsIcon = faBars;
  homeIcon = faHome;


  constructor(private controls: ControlsService) { }

  ngOnInit(): void {
  }

  sideNavOpen: boolean = true;
  toggleSideNav() {
    this.sideNavOpen = !this.sideNavOpen;
    this.controls.setSideNavOpen(this.sideNavOpen);
  }

}
