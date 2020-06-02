import { Component, OnInit } from '@angular/core';
import {Users} from './users.model'
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users:Users[]=[
    new Users("Mahesh",25),
    new Users("Shakti",23),
    new Users("Krishna",23),
    new Users("Radha",21),
  ]
  toggled=false;
  constructor() {}

  ngOnInit(): void {}

  handleClick(){
    this.toggled = !this.toggled
  }
  
}
