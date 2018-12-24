import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  constructor() { }

  @ViewChild("name") name: ElementRef;
  @ViewChild("amount") amount: ElementRef;
  @Output() ingredientAdded = new EventEmitter<Ingredient>();


  ngOnInit() {
  }

  onAdd() {
    let name=this.name.nativeElement.value;
    let amount=this.amount.nativeElement.value;
    this.ingredientAdded.emit(new Ingredient(name,amount));
  }

}
