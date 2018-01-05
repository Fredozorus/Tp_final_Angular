import { Component, OnInit } from '@angular/core';
import { FridgeService } from '../service/fridge/fridge.service';
import { Ingredients } from '../models/ingredients';
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





  constructor(private fridgeservice: FridgeService) { }

  ngOnInit() {
    this.ingredients = this.fridgeservice.GetAll();
  }

  getQuantityIngredients(){
    return this.quantity;
  }

  setQuantityIngredients(_quantity : number) {
    this.quantity = _quantity;
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

  RemoveIngredients(ingredient: Ingredients){
    this.fridgeservice.RemoveIngredients(ingredient);
  }
  
EditIngredients(ingredient : Ingredients){
  this.fridgeservice.EditIngredients(ingredient);
}
}
