import { Injectable, OnInit } from '@angular/core';

@Injectable()
export class MyService {

  categories : String[] = ["smartphones", "tablets", "notebooks", "pc"];

  constructor () { }

}
