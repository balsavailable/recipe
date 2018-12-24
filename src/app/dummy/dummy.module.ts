import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FruitComponent } from './fruit/fruit.component';
import { DummyService } from '../dummy.service';
import { Dummy2Service } from '../dummy2.service';

@NgModule({
  imports: [
    CommonModule
  ],
  exports:[FruitComponent],
  providers: [],
  declarations: [FruitComponent]
})
export class DummyModule {

}
