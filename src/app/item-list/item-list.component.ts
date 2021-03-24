import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

export interface ListElements {
  name: string;
  qty: number;
  price: number;
}
const items: ListElements[] = [{ "name": "samsung Mobile", "qty": 5, "price": 10000 },
{ "name": "samsung TV", "qty": 3, "price": 15000 },
{ "name": "Apple Mobile", "qty": 5, "price": 60000 },
{ "name": "Bajaj Cooler", "qty": 8, "price": 9000 },
{ "name": "Godrej AC", "qty": 2, "price": 31000 },
{ "name": "Sony Laptop", "qty": 9, "price": 67000 },
{ "name": "Hp Desktop", "qty": 5, "price": 19000 }
];
@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {
 
  displayedColumns: string[] = [ 'name', 'qty', 'price'];
  dataSource = new MatTableDataSource(items);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  constructor() { }

  ngOnInit(): void {
  }

}
