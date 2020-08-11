import { Component, OnInit, ViewChild, ElementRef, SimpleChange } from '@angular/core';
import { ChildComponent } from './child.component';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

@Component({
  selector: 'app-react',
  templateUrl: './react.component.html',
  styleUrls: ['./react.component.styl'],
})
export class ReactComponent implements OnInit {

  constructor() { }

  @ViewChild('react', {static: false}) containerRef: ElementRef;

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChange): void {
    this.render();
  }

  ngAfterViewInit() {
    this.render();
  }

  ngOnDestroy() {
    ReactDOM.unmountComponentAtNode(this.containerRef.nativeElement);
  }

  private render() {
    ReactDOM.render(
      <ChildComponent/>,
      this.containerRef.nativeElement
    );
  }

}
