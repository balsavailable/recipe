
import { Recipe } from './recipes-list/recipe.model';
import { EventEmitter } from '@angular/core';

export class RecipeService
{
    public recipeEmitter=new EventEmitter<Recipe>();
    private recipes: Recipe[] = [new Recipe("French Fries ", "Tomator ", "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Fries_2.jpg/800px-Fries_2.jpg"),
    new Recipe("Veg Meals", "meals with variety of vegitables (unlimited)", "https://www.mangoo.in/wp-content/uploads/2018/01/VEG-MEALS.jpg"),
    new Recipe("peanut", "very hot tasty spice peanuts", "https://1.bp.blogspot.com/-HwmhiZFz57U/WqbFhlRaemI/AAAAAAAAR9o/vyWVbiM992UhOaaw9GRuzjMr8V0Iq9UPQCLcBGAs/s320/26171050_1938697659729168_8721613958306216658_o.jpg")];

    public getRecipes()
    {
        return this.recipes.slice();
    }

}