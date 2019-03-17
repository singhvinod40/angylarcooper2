import { Component, Input, Output , EventEmitter } from '@angular/core';

@Component({
  selector: 'app-event-list',
  templateUrl: './eventList.component.html'
})

export class EventListComponent{
    @Input() events: any;
    @Output() eventClicked = new EventEmitter();
    someVariable = 'my name is kumar';
    onChildClick(){
      this.eventClicked.emit(this.events);
    }
    testfunction(){
      console.log(this.events.price);
    }

}
