import { Component, OnInit } from '@angular/core';
import { FridgeService } from '../service/fridge.service';
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

}
