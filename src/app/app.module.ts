import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FridgeComponent } from './fridge/fridge.component';
import { RecipesComponent } from './recipes/recipes.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { PlanningComponent } from './planning/planning.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatInputModule} from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatDialogModule} from '@angular/material/dialog';
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
import { EditFridgeComponent } from './fridge/edit-fridge/edit-fridge.component';
import { CalendarModule } from 'angular-calendar';
import { EditRecipeComponent } from './recipes/edit-recipe/edit-recipe.component';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

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
    HeaderComponent,
    EditFridgeComponent,
    EditRecipeComponent
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
    MatDialogModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatDatepickerModule,
    MatExpansionModule,
    NgbModalModule.forRoot(),
    CalendarModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents : [EditFridgeComponent, EditRecipeComponent]
})
export class AppModule { }
