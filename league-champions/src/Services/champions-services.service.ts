import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EnvironmentService } from './environment.service';
import { map, Observable } from 'rxjs';
import { response } from 'express';
import { Champion } from 'src/Domain/Champions/Champion.model';

@Injectable({
  providedIn: 'root'
})
export class ChampionsService {

  constructor(
    private http: HttpClient,
    private environmentService: EnvironmentService
  ) { }

  /**
   * Fonction permettant de récupérer la liste des champions
   * @params Aucun paramètres attendu
   * @returns Une liste de Champions
   */
  getChampions(): Observable<Champion[]> {
    const url = this.environmentService.getAllChampionsApiUrl();

    return this.http.get<any>(url).pipe(
      map((response: { data: any; }) => {
        const championsData = response.data;
        const championsList: Champion[] = [];

        for (let key in championsData) {
          if (championsData.hasOwnProperty(key)) {
            const champion = this.mapToModel(championsData[key]);
            championsList.push(champion);
          }
        }

        return championsList;
      }),
    );
  }

  private mapToModel(data: any): Champion {
    return new Champion(
      data.id,
      data.name,
      data.title,
      data.tags,
      []
    );
  }

}
