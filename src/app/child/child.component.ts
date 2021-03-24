import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  @Input() childMessage: string = '';
  constructor() { }

  ngOnInit(): void {
  }
  student = [{ "name": "Jimit", "age": 31 },
    { "name": "Raj", "age": 28 },
    { "name": "Pankaj", "age": 32 },
    { "name": "Salman khan", "age": 55 },
    { "name": "Neha", "age": 41},
    { "name": "Sneha", "age": 21 }

  ];

}
