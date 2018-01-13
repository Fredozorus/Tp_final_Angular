import { Component, OnInit } from '@angular/core';
import {Recipes} from '../models/recipes';
import {Ingredients} from '../models/ingredients';
import {RecipeService} from '../service/recipe/recipe.service';
import { FridgeService } from '../service/fridge/fridge.service';
import { Sanitizer } from '@angular/core/src/security';
import { DomSanitizer } from '@angular/platform-browser';
import { SafeUrl } from '@angular/platform-browser/src/security/dom_sanitization_service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {EditRecipeComponent} from '../recipes/edit-recipe/edit-recipe.component';
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

  constructor( private recipeservice: RecipeService, private sanitizer : DomSanitizer, public dialog: MatDialog) { }
  

  ngOnInit() {
    this.recipes = this.recipeservice.GetAll();
  }

  getFile(event){ 
    this.image = event.target.files[0].name;
} 

  AddRecipes(){
    if(this.name){
      this.recipeservice.AddRecipes({
        name: this.name,
        description: this.description,
        image: this.image,
        //ingredientList: this.ingredientList[]
      });
    }
  }

  RemoveRecipes( recipe: Recipes){
    this.recipeservice.RemoveRecipes(recipe);
  }
  openDialogRecipeEdit(recipe: Recipes): void {
    console.log(recipe);
    let dialogRef = this.dialog.open(EditRecipeComponent, {
      width: '250px',
      data: {recipe}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      const idx = this.recipes.indexOf(recipe);
      this.recipes[idx].name = result[0];
      this.recipes[idx].description = result[1];
      this.recipes[idx].image = result[2];
    
  });


  }

}
