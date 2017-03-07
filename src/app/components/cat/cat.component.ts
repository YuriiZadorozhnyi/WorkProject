import { Component } from '@angular/core';

import { MyService } from '../../services/my.service';

@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.css']
})
export class CatComponent {

  categories = [];

  constructor (private serv : MyService) {}

  ngOnInit() {
    this.categories = this.serv.categories;
  }

}
