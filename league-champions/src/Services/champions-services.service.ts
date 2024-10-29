import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EnvironmentService } from './environment.service';
import { map, Observable } from 'rxjs';
import { Champion } from 'src/Domain/Champions/Champion.model';
import { Categorie } from 'src/Domain/Categories/Categorie.model';

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

  
/**
 * Fonction permettant de récupérer les données pour un champion spécifique
 * @params "id" l'id du champion recherché
 * @return un [Champion] avec les données détaillées
 */
getChampionById(id:string): Observable<Champion> {
  const url = this.environmentService.getChampionApiUrl()+id+".json";

  return this.http.get<any>(url).pipe(
    map((response: { data: any; }) => {
      var championsData = response.data;
      var champion: Champion = this.mapToModel(championsData);

      console.log(champion)

      return champion;
    }),
  );
}
  private mapToModel(data: any): Champion {
    const tagsArray: String[] = [];
    
    for (const tag of data.tags) {
        tagsArray.push(tag);
    }
    
    return new Champion(
        data.id,
        data.name,
        data.title,
        tagsArray,
        [],
        data.stats
    );
}


}
