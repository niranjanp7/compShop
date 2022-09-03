import { Component, OnInit } from '@angular/core';
import { ControlsService } from '../services/controls.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.sass']
})
export class ContentComponent implements OnInit {

  constructor(private controls: ControlsService) {
    controls.getSideNavOpen().subscribe({
      next: (res) => {
        this.contentShrink = res;
      }
    });
  }

  ngOnInit(): void {
  }

  contentShrink: boolean = true;

}
