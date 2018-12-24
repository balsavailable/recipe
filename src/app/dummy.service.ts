import { EventEmitter } from '@angular/core';
export class DummyService {

  state: string = "fruit";
  constructor() { }
  public stateOfService() {
    console.log(this.state);
  }

  public dummyEmitter=new EventEmitter<string>();

}
