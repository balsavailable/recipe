import { RecipesComponent } from './recipes/recipes.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'recipe';
  loadedFeature:string='recipe';
  state:boolean=true;
  val:string="m"; 
  onSelect(feature:string)
  {
    this.loadedFeature=feature;
  }

}
