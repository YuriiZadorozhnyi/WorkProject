import { Component } from '@angular/core';

import { NavComponent } from './components/nav/nav.component';
import { CatComponent } from './components/cat/cat.component';

import { MyService } from './services/my.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MyService]
})
export class AppComponent {

}
