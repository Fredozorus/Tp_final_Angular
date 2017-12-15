import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FridgeComponent } from './fridge/fridge.component';
import { RecipesComponent } from './recipes/recipes.component';
import { PlanningComponent } from './planning/planning.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {Routes} from '@angular/router';

const AppRoutes: Routes = [
  
]


@NgModule({
  declarations: [
    AppComponent,
    FridgeComponent,
    RecipesComponent,
    PlanningComponent,
    ShoppingListComponent,
    RecipesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
