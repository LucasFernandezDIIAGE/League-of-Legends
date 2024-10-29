import { Component, OnInit } from '@angular/core';
import { Champion } from 'src/Domain/Champions/Champion.model';
import { ChampionsService } from 'src/Services/champions-services.service';

@Component({
  selector: 'app-champions-list',
  templateUrl: './champions-list.component.html',
  styleUrls: ['./champions-list.component.scss'],
})
export class ChampionsListComponent  implements OnInit {

  championsList: Champion[] = [];
  filteredChampionsList: Champion[]=[]

  constructor(
    private championsService: ChampionsService
  ) { }

  ngOnInit() {
    this.getAllChampions()
  }

  getAllChampions(){
    this.championsService.getChampions().subscribe({
      next: (data) => {
        this.championsList = data;
        this.filteredChampionsList = [...this.championsList]
      },
      error: (error) => {
        console.error('Erreur lors de la récupération des champions:', error);
      }
    });
  }

  handleInput(event: any) {
    const query = event.target.value.toLowerCase();
    
    // Liste de mots-clés spéciaux et des champions correspondants
    const specialFilters: {[key: string]: string[]} = {
      'chat': ['Rengar', 'Yuumi'],
      'renard': ['Ahri'],
    };
  
    if (specialFilters[query]) {
      this.filteredChampionsList = this.championsList.filter((champion) =>
        specialFilters[query].includes(champion.nom)
      );
    } else {
      // Filtre classique par nom ou titre si aucun mot-clé spécial n'est trouvé
      this.filteredChampionsList = this.championsList.filter((champion) => 
        champion.nom.toLowerCase().includes(query) || 
        champion.titre.toLowerCase().includes(query)
      );
    }
  }
  
  

}

