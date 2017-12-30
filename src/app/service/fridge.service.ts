import { Injectable,EventEmitter} from '@angular/core';
import { Ingredients } from '../models/ingredients';
import { Console } from '@angular/core/src/console';


@Injectable()
export class FridgeService {

  ingredients: Ingredients[] = [
    { name: 'Choux', quantity: 120, unit: 'g' },
    { name: 'Haricots', quantity: 300, unit: 'g' },
    { name: 'Carottes', quantity: 180, unit: 'g' },
    { name: 'Aubergine', quantity: 260, unit: 'g' },

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

  EditIngredients(ingredient: Ingredients){
    const idx = this.ingredients.indexOf(ingredient);
    if(idx> -1 ){
      var changeQuantity = prompt("Entrez la nouvelle quantité");
      if (changeQuantity != null) {
          document.getElementById("quantity").innerHTML = changeQuantity;
      }
    }
  }


  constructor() { }

}
