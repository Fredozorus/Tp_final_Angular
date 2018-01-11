import { Component, OnInit } from '@angular/core';
import {Recipes} from '../models/recipes';
import {Ingredients} from '../models/ingredients';
import {RecipeService} from '../service/recipe/recipe.service';
import { FridgeService } from '../service/fridge/fridge.service';
import { Sanitizer } from '@angular/core/src/security';
import { DomSanitizer } from '@angular/platform-browser';
import { SafeUrl } from '@angular/platform-browser/src/security/dom_sanitization_service';
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

  constructor( private recipeservice: RecipeService, private sanitizer : DomSanitizer) { }
  

  ngOnInit() {
    this.recipes = this.recipeservice.GetAll();
  }

  AddRecipes(){
    if(this.name){
      this.recipeservice.AddRecipes({
        name: this.name,
        description: this.description,
        image: this.image // n'affiche pas la photo de la recette ici
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

  Upload(){
   //  this.image = this.sanitizer.bypassSecurityTrustUrl(((<HTMLInputElement>document.getElementById("recipe_pic")).value));
    // cett méthode est lié à mon input 
  }

}
