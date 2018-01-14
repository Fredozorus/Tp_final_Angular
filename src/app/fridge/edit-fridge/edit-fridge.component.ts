import { Component, OnInit } from '@angular/core';
import { Inject} from '@angular/core';
import {FridgeComponent} from '../../fridge/fridge.component'
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { Ingredients } from '../../models/ingredients';

@Component({
  selector: 'app-edit-fridge',
  templateUrl: './edit-fridge.component.html',
  styleUrls: ['./edit-fridge.component.css']
})
export class EditFridgeComponent implements OnInit {

  ingredient : Ingredients;

  name: string;
  quantity: number;
  unit: string

  constructor(
    public dialogRef: MatDialogRef<EditFridgeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Ingredients) {
      this.ingredient = data['ingredient'];

      this.name = this.ingredient.name;
      this.quantity = this.ingredient.quantity;
      this.unit = this.ingredient.unit;
      
     }
     
    onNoClick(): void {
      this.dialogRef.close();
    }
    
    onClickYes(){
      console.log(this.name, this.quantity, this.unit, this.ingredient);

    }

  ngOnInit() {
  }

}
