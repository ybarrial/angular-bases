import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  @Output()
  onDelete: EventEmitter<string> = new EventEmitter();

  @Input()
  public characterList: Character[]=[{
    name: 'Trunks',
    power: 10
  }];

  onDeleteCharacter(id?: string):void {
    if( !id ) return;
    //TODO: Emitir el ID del personaje
    console.log({id})
    this.onDelete.emit(id)
  }

}
