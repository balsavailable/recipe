import { Dummy2Service } from './../../dummy2.service';
import { DummyService } from './../../dummy.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fruit',
  templateUrl: './fruit.component.html',
  styleUrls: ['./fruit.component.css'],
  providers:[Dummy2Service]
})
export class FruitComponent implements OnInit {

  constructor(private service: DummyService,private service2:Dummy2Service) { }


  ngOnInit() {
    this.service.stateOfService();
    this.service2.display();
    this.service.stateOfService();
  }



}
