import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.scss']
})
export class HeroesListComponent {

  heroesName: string[] = ['Spiderman', 'Ironman', 'Hulk', 'She Hulk', 'Thor'];
}
