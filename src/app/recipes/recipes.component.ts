import { Component, OnInit } from '@angular/core';
import {Recipes} from '../models/recipes';
import {Ingredients} from '../models/ingredients';
import {RecipeService} from '../service/recipe/recipe.service';
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
  ingredientList: Ingredients[];

  constructor( private recipeservice: RecipeService) { }

  ngOnInit() {
    //this.recipes = this.recipeservice.GetAll();
  }

}
