import { Injectable } from '@angular/core';
import {Recipes} from '../../models/recipes';
import { EventEmitter } from 'events';

@Injectable()
export class RecipeService {

recipes : Recipes[] = [
  {name: 'Crêpes', description: 'description des crêpes' , image: 'http://static.750g.com/images/660-auto/b4d7474a061a440ae4108e179c903426/crepes-rapides-pour-la-chandeleur.jpg'},
  {name: 'Donuts', description: 'description des donuts', image:'https://timedotcom.files.wordpress.com/2017/05/170602-free-donut-day.jpg'}
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
