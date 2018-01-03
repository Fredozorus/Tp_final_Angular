import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FridgeComponent } from './fridge/fridge.component';
import { RecipesComponent } from './recipes/recipes.component';
import { PlanningComponent } from './planning/planning.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatInputModule} from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatSelectModule} from '@angular/material/select';
import {RouterModule} from '@angular/router';
import {Routes} from '@angular/router';
import { FlexLayoutModule } from "@angular/flex-layout";
import { HeaderComponent } from './header/header.component';
import {FormsModule} from '@angular/forms';

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
    FormsModule,
    MatCheckboxModule,
    MatListModule,
    MatCardModule,
    MatIconModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatExpansionModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
