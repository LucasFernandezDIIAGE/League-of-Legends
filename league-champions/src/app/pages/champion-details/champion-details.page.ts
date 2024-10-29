import { Component, OnInit } from '@angular/core';
import { ChampionsService } from 'src/Services/champions-services.service';
import { Champion } from 'src/Domain/Champions/Champion.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-champion-details',
  templateUrl: './champion-details.page.html',
  styleUrls: ['./champion-details.page.scss'],
})
export class ChampionDetailsPage implements OnInit {

  champion: Champion = {
    id : '',
    nom: '',
    titre: '',
    categories: [],
    skins: [],
    stats: undefined
  }
  championId: string = ''

  constructor(
    private championsService: ChampionsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params)=>{
      this.championId = params.get('id')!
    })
  }

  async loadChampion(id: string){
    this.championsService.getChampionById(id).subscribe((champion)=>{
      this.champion = champion
    })
  }

}
