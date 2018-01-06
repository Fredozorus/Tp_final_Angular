import { Component, OnInit } from '@angular/core';
import {Recipes} from '../models/recipes';
import {Ingredients} from '../models/ingredients';
import {RecipeService} from '../service/recipe/recipe.service';
import { FridgeService } from '../service/fridge/fridge.service';
@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {

  recipes : Recipes[];

  name: string;
  description : string;
  image: string;
  //ingredientList: Ingredients[];

  constructor( private recipeservice: RecipeService) { }

  ngOnInit() {
    this.recipes = this.recipeservice.GetAll();
  }

  AddRecipes(){
    if(this.name){
      this.recipeservice.AddRecipes({
        name: this.name,
        description: this.description,
        image: this.image
        //ingredientList: this.ingredientList[]
      });
    }
  }

  RemoveRecipes( recipe: Recipes){
    this.recipeservice.RemoveRecipes(recipe);
  }

  EditRecipe(recipe:Recipes){
    this.recipeservice.EditDescription(recipe);
  }

}
