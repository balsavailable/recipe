import { RecipesComponent } from './recipes/recipes.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeadersComponent } from './headers/headers.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { RecipesListComponent } from './recipes/recipes-list/recipes-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipesComponent,
    HeadersComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    RecipesListComponent,
    RecipeDetailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
