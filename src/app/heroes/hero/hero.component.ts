import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {

  name = "ironman";
  age = 45;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${ this.name } - ${ this.age }`;
  }

  changeHero(): void {
    //TODO:
    //throw 'Método no implementado';
    this.name = 'Thor';
  }

  changeAge(): void {
    this.age = 25;
  }

  resetForm(): void {
    //this.name = "ironman";
    this.age = 45;

    // Solo cambia la primera etiqueta h1 que encuentra en el html
    document.querySelector('h1')!.innerHTML = '<h1>Desde Angular</h1>';

    // Cambia todos las etiquetas h1 que encuentra en el html
    document.querySelectorAll('h1').forEach(element => {
      element.innerHTML = '<h1>Desde Angular</h1>';
    });
  }

}
