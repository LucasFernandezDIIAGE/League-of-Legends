import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnvironmentService {

  // Liste des variables contenant les débuts d'URL des appels API

  private readonly baseUrl: string = 'https://ddragon.leagueoflegends.com/cdn/14.21.1/data/fr_FR';   // Préfix URL API LOL

  private readonly apiAllChampions: string = '/champion.json';
  private readonly apiChampion: string = '/champion/';
  private readonly apiSkin: string = '/skins';

  constructor() { }

  // Retourne la base URL API
  getApiBaseUrl(): string {
    return this.baseUrl;
  }

  // URL complète pour accéder aux champions
  getAllChampionsApiUrl(): string {
    return this.getApiBaseUrl() + this.apiAllChampions;
  }

  // URL complète pour accéder à un champion
  getChampionApiUrl(): string {
    return this.getAllChampionsApiUrl() + this.apiChampion
  }

  // URL complète pour accéder aux skins
  getSkinApiUrl(): string {
    return this.getApiBaseUrl() + this.apiSkin;
  }
}
