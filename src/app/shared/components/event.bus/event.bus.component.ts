import { Component } from '@angular/core';
import { EventBusService } from '../../services/event-bus.service';
import { EmitEvent, Events } from '../../services/events';

@Component({
  selector: 'app-event-bus',
  template: `
    <p>
      event.bus works!
    </p>
    <button (click)="addCustomer()">Add Customer </button>
  `,
  styles: ``
})
export class EventBusComponent {
      
    constructor(private eventBusService: EventBusService) { }

    addCustomer(){
      this.eventBusService.emit(
        new EmitEvent(Events.CustomerCreated, {name: 'John', city: 'London'})
      )
    }
}
