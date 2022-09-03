import { Component, OnInit } from '@angular/core';
import { ActivationStart, Event, Router } from '@angular/router';
import { IconDefinition, faIdCard, faHome, faFileLines, faPlay } from '@fortawesome/free-solid-svg-icons';
import { ControlsService } from '../services/controls.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.sass']
})
export class SideNavComponent implements OnInit {

  menu: Menu[] = [
    { icon: faHome, title: 'Home', url: '' },
    { icon: faIdCard, title: 'Card', url: 'card' },
    {icon: faPlay, title: 'Button', url: 'button'},
    { icon: faFileLines, title: 'Form', url: 'form'}
  ]

  selectedByUrl: string = '';

  constructor(private controls: ControlsService, private router: Router) {
  }
  
  ngOnInit(): void {
    
    this.router.events.subscribe({
      next: (event: Event) => {
        if (event instanceof ActivationStart) {
          if (event.snapshot.url.length === 0) {
            this.selectedByUrl = ''
          } else {
            this.selectedByUrl = event.snapshot.url[0].path;
          }
        }
      }
    });
  }
  
  sideNavOpen!: boolean;
  getSideNavOpen = 
    this.controls.getSideNavOpen().subscribe({
      next: (res) => {
        this.sideNavOpen = res;
        console.log(res);
      }
    });

  loadPage(url: string) {
    this.router.navigate([url]);
  }

  ngOnDestroy(){
    this.getSideNavOpen.unsubscribe();
  }

}

interface Menu { 'icon': IconDefinition, 'title': string, 'url': string };
