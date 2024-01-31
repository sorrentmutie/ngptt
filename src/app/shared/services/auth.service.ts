import { Injectable, Signal, WritableSignal, computed, signal } from "@angular/core";
import { Observable, Subject, delay, of, tap } from "rxjs";
import { User } from "../../users/models/user";
import { EventBusService } from "./event-bus.service";
import { EmitEvent, Events } from "./events";
import { toSignal } from "@angular/core/rxjs-interop";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  isLoggedIn = false;

  mockUser: User = {
    id: 1,
    email: "salva@gmail.com",
    avatar: "https://reqres.in/img/faces/1-image.jpg",
    roles: ["user", "admin"],
  };

  user2: WritableSignal<User | undefined> = signal(undefined);

  constructor(private eventBus: EventBusService) {}

  login(): Observable<boolean> {
    return of(true).pipe(
      delay(1000),
      tap(() => {
        this.user2.set(this.mockUser);
        this.isLoggedIn = true;
        this.eventBus.emit(new EmitEvent(Events.UserLoggedIn, this.mockUser));
      })
    );
  }

  logout() {
    this.isLoggedIn = false;
    this.user2.set( undefined);
  }
}
