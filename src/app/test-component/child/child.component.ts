import { Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnChanges, OnInit, DoCheck {
  @Input() userName = '';

  ngOnInit(): void {
    console.log("Init child");
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("Change name:", changes);
  }

  ngDoCheck(): void {
    console.log("do check");  
  }
}
