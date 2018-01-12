import { Component, OnInit } from '@angular/core';
import { Inject} from '@angular/core';
import {RecipesComponent} from '../../recipes/recipes.component'
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { Ingredients } from '../../models/ingredients';
import { Recipes } from '../../models/recipes';

@Component({
  selector: 'app-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrls: ['./edit-recipe.component.css']
})
export class EditRecipeComponent implements OnInit {


  recipe: Recipes;

  name: string;
  description: string;
  image: string;

  constructor(
    public dialogRef: MatDialogRef<EditRecipeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Recipes) {
      this.recipe = data['recipe'];

      this.name = this.recipe.name;
      this.description = this.recipe.description;
      this.image = this.recipe.image;
    }

    onNoClick(): void {
      this.dialogRef.close();
    }
    onClickRecipeYes(){
      console.log(this.name, this.description, this.image, this.recipe);

    }

  ngOnInit() {
  }

}
