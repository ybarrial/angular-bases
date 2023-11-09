import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';

import { v4 as uuid } from 'uuid';

uuid()

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  characters: Character[]= [
    {id: uuid(), name: 'Krillin', power: 1000},
    {id: uuid(), name: 'Goku', power: 9500},
    {id: uuid(), name: 'Vegeta', power: 7500}
  ];

  addCharacter(character: Character): void {
  //onNewCharacter({name, power}: Character): void {

    const newCharacter: Character = {
      id: uuid(),
      ...character
      //name,
      //power
    };

    console.log("NEW CHARACTER", newCharacter);
    this.characters.push(newCharacter);
  }

  //onDeleteCharacter(id: string) {
    //console.log(index);
    //his.characters.splice(index,1);
  //}
  deleteCharacterById(id: string) {
    this.characters = this.characters.filter( character => character.id !== id );
  }

  constructor() { }
}
