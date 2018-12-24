import { RecipesComponent } from './recipes/recipes.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeadersComponent } from './headers/headers.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { RecipesListComponent } from './recipes/recipes-list/recipes-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { Decimal2Directive } from './decimal2.directive';
import { DecimalNumberDirective } from './decimal-number.directive';
import { HighlightDirective } from './highlight.directive';
import { RecipeItemComponent } from './recipes/recipes-list/recipe-item/recipe-item.component';
import { Dummy2Directive } from './dummy2.directive';
import { DummyModule } from './dummy/dummy.module';
import { DummyService } from './dummy.service';

@NgModule({
  declarations: [
    AppComponent,
    RecipesComponent,
    HeadersComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    RecipesListComponent,
    RecipeDetailComponent,
    Decimal2Directive,
    DecimalNumberDirective,
    HighlightDirective,
    RecipeItemComponent,
    Dummy2Directive
  ],
  imports: [
    BrowserModule,
    DummyModule
  ],
  providers: [DummyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
