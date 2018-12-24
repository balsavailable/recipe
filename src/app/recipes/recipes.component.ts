import { RecipeService } from './recipe.service';
import { Component } from "@angular/core";
import { templateSourceUrl } from "@angular/compiler";
import { Recipe } from "./recipes-list/recipe.model";

@Component(
    {
        selector:"recipes-component",
        templateUrl:"recipes.component.html",
        providers:[RecipeService]
    }
)
export class RecipesComponent
{
    selectedRecipe:Recipe;
    constructor(private recipeService:RecipeService)
    {
    }
    ngOnInit()
    {
        this.recipeService.recipeEmitter.subscribe(
            (recipe:Recipe)=>
            {
                this.selectedRecipe=recipe;
            }
        );
    }
}