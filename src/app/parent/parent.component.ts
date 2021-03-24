import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements AfterViewInit {

  constructor() { }
  message = "Data is coming from parent Component to child";
  ngOnInit(): void {
  }
  @ViewChild(ChildComponent) childData : any;
  parentData: any = [];
  ngAfterViewInit() {
    this.parentData = this.childData.student;
  }
}
