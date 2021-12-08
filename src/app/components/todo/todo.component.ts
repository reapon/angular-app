import { Component, OnInit } from '@angular/core';

import{Todo} from 'src/app/models/todo.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  t = new Todo("Ashraful");

  todos =[
    {
   "name":"PHP",
   "isDone": false 
  },
  {
    "name":".net",
    "isDone": true 
   },
   {
    "name":"Python",
    "isDone": false 
   }


];
  constructor() { }

  ngOnInit(): void {
  }

}
