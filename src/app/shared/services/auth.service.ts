import { Injectable } from "@angular/core";
import { Observable, Subject, delay, of, tap } from "rxjs";
import { User } from "../../users/models/user";
import { EventBusService } from "./event-bus.service";
import { EmitEvent, Events } from "./events";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  isLoggedIn = false;
  currentUser: User | undefined = undefined;

  mockUser: User = {
    id: 1,
    email: "salva@gmail.com",
    avatar: "https://reqres.in/img/faces/1-image.jpg",
    roles: ["user", "admin"],
  };

  private subjectUser$ = new Subject<User | undefined>();

  currentUser$ = this.subjectUser$.asObservable();

  constructor(private eventBus: EventBusService) {}

  login(): Observable<boolean> {
    return of(true).pipe(
      delay(1000),
      tap(() => {
        this.subjectUser$.next(this.mockUser);
        this.isLoggedIn = true;
        this.eventBus.emit(new EmitEvent(Events.UserLoggedIn, this.mockUser));
        this.currentUser = this.mockUser;
      })
    );
  }

  logout() {
    this.isLoggedIn = false;
    this.subjectUser$.next(undefined);
  }
}
