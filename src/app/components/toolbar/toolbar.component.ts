import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  @Output() menuClicked: EventEmitter<void> = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
  }

  public handleMenuClick(): void {
    this.menuClicked.emit();
  }
}
