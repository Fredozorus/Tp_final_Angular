import { Component, OnInit } from '@angular/core';
import {ShoppingService} from '../service/shopping/shopping.service';
import { Shopping } from '../models/shopping';
import {FridgeService} from '../service/fridge/fridge.service'
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  providers: [ShoppingService, FridgeService]
})
export class ShoppingListComponent implements OnInit {
  
  shoppingListItems : Shopping[];
  
  name: string
  quantity : number;
  unit : string;
  checked : boolean;


  constructor(private shoppingservice: ShoppingService, private fridgeservice : FridgeService) { }

  ngOnInit() {
    this.shoppingListItems = this.shoppingservice.GetAll();
    this.checked =false;
  }


  AddItem() {
    if (this.name) {
      this.shoppingservice.AddItem({
        name: this.name,
        quantity : this.quantity,
        unit : this.unit,
        checked : this.checked

      });
    }
  }

  Checked(shoppingListItem: Shopping){
    const idx = this.shoppingListItems.indexOf(shoppingListItem);
    this.shoppingListItems[idx].checked = true;
  }


  //work in progress
  AddToFridge(shoppingListItem : ShoppingListComponent){
    
      //this.shoppingListItems.forEach((shoppingListItem) => {
     //   this.fridgeservice.AddIngredients(shoppingListItem);
      
  
     
    }
   
  //}

  RemoveItem(shoppingListItem: Shopping){
    this.shoppingservice.RemoveItem(shoppingListItem);
  }
}
