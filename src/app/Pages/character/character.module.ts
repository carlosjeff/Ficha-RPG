import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterComponent } from './character.component';
import { CharacterHeaderComponent } from './character-header/character-header.component';



@NgModule({
  declarations: [CharacterComponent, CharacterHeaderComponent],
  imports: [
    CommonModule
  ]
})
export class CharacterModule { }
