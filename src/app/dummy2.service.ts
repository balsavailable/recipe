import { DummyService } from './dummy.service';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Dummy2Service {

  constructor(private service: DummyService) { }
  dummyEvent = new EventEmitter<String>();

  ngOnInit() {


  }

  public display() {
    this.service.state += " second service juice";
    console.log("i've changed the state of an first service " + this.service.state);
  }





}
