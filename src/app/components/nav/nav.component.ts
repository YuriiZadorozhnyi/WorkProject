import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
    
  productStatusTogle: Boolean = false;

  toggle() {
    this.productStatusTogle = !this.productStatusTogle;
  }

}
