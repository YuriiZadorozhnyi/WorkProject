import { Injectable } from '@angular/core';

@Injectable()
export class MyService {

  categories : String[] = ["smartphones", "tablets", "notebooks", "pc"];

  logger() {
    console.log("logger is working");
  }

  constructor () {}

}
