import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FridgeComponent } from './fridge/fridge/fridge.component';
import { ReceiptsComponent } from './receipts/receipts.component';
import { PlanningComponent } from './planning/planning.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipesComponent } from './recipes/recipes.component';


@NgModule({
  declarations: [
    AppComponent,
    FridgeComponent,
    ReceiptsComponent,
    PlanningComponent,
    ShoppingListComponent,
    RecipesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
