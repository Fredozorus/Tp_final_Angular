import { Component, OnInit } from '@angular/core';
import { FridgeService } from '../service/fridge/fridge.service';
import { EditFridgeComponent } from '../fridge/edit-fridge/edit-fridge.component';
import { Ingredients } from '../models/ingredients';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-fridge',
  templateUrl: './fridge.component.html',
  styleUrls: ['./fridge.component.css'],
  providers: [FridgeService]
})
export class FridgeComponent implements OnInit {

  ingredients: Ingredients[];

  name: string;
  quantity: number;
  unit: string;


  constructor(private fridgeservice: FridgeService, public dialog: MatDialog) { }

  ngOnInit() {
    this.ingredients = this.fridgeservice.GetAll();
  }


  AddIngredients() {
    if (this.name) {
      this.fridgeservice.AddIngredients({
        name: this.name,
        quantity: this.quantity,
        unit: this.unit
      });
    }
  }

  RemoveIngredients(ingredient: Ingredients) {
    this.fridgeservice.RemoveIngredients(ingredient);
  }


  //Ouvre la fenêtre de modification
  openEditDialog(ingredient: Ingredients): void {
    let dialogRef = this.dialog.open(EditFridgeComponent, {
      width: '250px',
      data: { ingredient }
    });

      //Après la fermeture de la fenêtre
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      const idx = this.ingredients.indexOf(ingredient);
      this.ingredients[idx].name = result[0];
      this.ingredients[idx].quantity = result[1];
      this.ingredients[idx].unit = result[2];
    });
  }

}
