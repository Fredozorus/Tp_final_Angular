import { Injectable } from '@angular/core';
import {Recipes} from '../../models/recipes';
import { EventEmitter } from 'events';

@Injectable()
export class RecipeService {

recipes : Recipes[] = [
  {name: 'Crepes', description: 'description des crêpes',image: 'mypath',ingredientList: ['farine','oeufs','lait']}
];


recipesChanged = new EventEmitter();

GetAll(){
  return this.recipes;
}

AddRecipes(recipe: Recipes){
  this.recipes.push(recipe);
 // this.recipesChanged.emit();
}


RemoveRecipes(recipe: Recipes){
  const idx = this.recipes.indexOf(recipe);
  if(idx > -1){
    this.recipes.splice(idx,1);
    //this.recipesChanged.emit();
  }else{
    console.log("Recipe not found : " + recipe.image)
  }
}


EditDescription(recipe: Recipes){
  const idx = this.recipes.indexOf(recipe);
  let mydescription: string;
  if(idx >-1){
    this.recipes[idx].description = mydescription;
  }
}


  constructor() { }

}
