import { Component, Input, OnInit } from '@angular/core';
import { Champion } from 'src/Domain/Champions/Champion.model';

@Component({
  selector: 'app-champion-card',
  templateUrl: './champion-card.component.html',
  styleUrls: ['./champion-card.component.scss'],
})
export class ChampionCardComponent  implements OnInit {

  @Input() champion!: Champion;

  constructor() { }

  ngOnInit() {}
}
