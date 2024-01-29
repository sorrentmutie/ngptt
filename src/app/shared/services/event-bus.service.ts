import { Injectable } from '@angular/core';
import { Subject, filter, map } from 'rxjs';
import { EmitEvent, Events } from './events';

@Injectable({
  providedIn: 'root'
})
export class EventBusService {

  private subject$ = new Subject<any>();
  constructor() { }

  emit(event: EmitEvent){
    this.subject$.next(event);
  }

  on(event: Events, action: any){
    return this.subject$
    .pipe(   
      filter((e: EmitEvent) =>  e.name === event),
      map( (ev: EmitEvent) => ev.value )
    )
    .subscribe(action);
  }

}
