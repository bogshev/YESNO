import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-voter',
  templateUrl: './voter.component.html',
  styles: ['h4 {color: red}'],
})

export class VoterComponent implements OnInit {

  y = 0;
  n = 0;

  public entry = "Enter your credentials";

  yes(value){
    console.log(value + ' pressed YES| total votes ' + (this.y=this.y+1))
  }

  no(value){
    console.log(value + ' pressed NO| total votes ' + (this.n=this.n+1))
  }

  constructor() { }

  ngOnInit() {
  }


}
