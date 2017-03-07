import { Component, OnInit } from '@angular/core';

import { MyService } from '../../services/my.service';

@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.css']
})
export class CatComponent implements OnInit {

  categories = [];

  constructor (private serv : MyService) {}

  ngOnInit() {
    this.categories = this.serv.categories;
  }

}
