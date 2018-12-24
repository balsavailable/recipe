import { RecipeService } from './../../recipe.service';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  constructor(private recipeService:RecipeService) { }

  @Input() recipe:Recipe;

  @Output() recipeSelected=new EventEmitter<void>();
  ngOnInit() {
  }

  onSelect()
  {
    this.recipeService.recipeEmitter.emit(this.recipe);
  }



}
