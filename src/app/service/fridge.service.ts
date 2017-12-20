import { Injectable } from '@angular/core';
import { Ingredients } from '../models/ingredients';
import { EventEmitter } from '@angular/core/src/event_emitter';
import { Console } from '@angular/core/src/console';


@Injectable()
export class FridgeService {

  ingredients: Ingredients[] = [
    { name: 'Choux', quantity: 120, unity: 'g' },
    { name: 'Haricots', quantity: 300, unity: 'g' },
    { name: 'Carottes', quantity: 180, unity: 'g' },
    { name: 'Aubergine', quantity: 260, unity: 'g' },

  ];

  ingredientsChanged = new EventEmitter();

  GetAll(){
    return this.ingredients;
  }

  AddIngredients(ingredient: Ingredients){
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit();
  }


  RemoveIngredients(ingredient: Ingredients){
    const idx = this.ingredients.indexOf(ingredient);
    if(idx > -1){
      this.ingredients.splice(idx,1);
      this.ingredientsChanged.emit();
    }else {
      console.log("Ingredients not found " +  ingredient.name)
    }

  }


  constructor() { }

}
