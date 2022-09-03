import { Component, NgModule, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.sass']
})
export class CardComponent implements OnInit {

  constructor() { }

  myCard = {$implicit: "Lol", name: 'LOL'};

  ngOnInit(): void {
  }

}
