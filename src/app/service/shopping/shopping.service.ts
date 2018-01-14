import { Injectable, EventEmitter } from '@angular/core';
import {Shopping} from '../../models/shopping';

@Injectable()
export class ShoppingService {
  shoppingListItems: Shopping[] = [
    {name:'Poulet',quantity: 1,unit: 'kg',
    checked: false}
  ];

  GetAll(){
    return this.shoppingListItems;
  }

  shoppingListChanged = new EventEmitter()

  AddItem(shoppingListItem: Shopping){
    this.shoppingListItems.push(shoppingListItem);
    this.shoppingListChanged.emit();
  }


  RemoveItem(shoppingListItem: Shopping){
    const idx = this.shoppingListItems.indexOf(shoppingListItem);
    if(idx > -1){
      this.shoppingListItems.splice(idx,1);
      this.shoppingListChanged.emit();
    }else {
      console.log("Ingredients not found :  " +  shoppingListItem.name)
    }
  }

  constructor() { }

}
