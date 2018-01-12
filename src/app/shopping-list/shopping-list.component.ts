import { Component, OnInit } from '@angular/core';
import {ShoppingService} from '../service/shopping/shopping.service';
import { Shopping } from '../models/shopping';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  providers: [ShoppingService]
})
export class ShoppingListComponent implements OnInit {
  
  shoppingListItems : Shopping[];
  
  name: string
  checked : boolean;


  constructor(private shoppingservice: ShoppingService) { }

  ngOnInit() {
    this.shoppingListItems = this.shoppingservice.GetAll();
    this.checked = false;
  }


  AddItem() {
    if (this.name) {
      this.shoppingservice.AddItem({
        name: this.name,
        checked : this.checked
      });
    }
  }

  Checked(shoppingListItem: Shopping){


  }

  RemoveItem(shoppingListItem: Shopping){
    this.shoppingservice.RemoveItem(shoppingListItem);
  }
}
