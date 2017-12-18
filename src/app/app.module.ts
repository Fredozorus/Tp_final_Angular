import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FridgeComponent } from './fridge/fridge.component';
import { RecipesComponent } from './recipes/recipes.component';
import { PlanningComponent } from './planning/planning.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {RouterModule} from '@angular/router';
import {Routes} from '@angular/router';
import { HeaderComponent } from './header/header.component';

const appRoutes : Routes = [
  { path: 'Frigo', component: FridgeComponent},
  { path: 'Recettes',component: RecipesComponent },
  { path: 'Planning', component : PlanningComponent},
  { path: 'ShoppingListe', component : ShoppingListComponent},
];


@NgModule({
  declarations: [
    AppComponent,
    FridgeComponent,
    RecipesComponent,
    PlanningComponent,
    ShoppingListComponent,
    RecipesComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
