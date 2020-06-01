import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toggle-para',
  templateUrl: './toggle-para.component.html',
  styleUrls: ['./toggle-para.component.css']
})
export class ToggleParaComponent implements OnInit {
  toggled=false;
  constructor() { }

  ngOnInit(): void {
  }

  handleClick(){
    this.toggled = !this.toggled
  }
}
