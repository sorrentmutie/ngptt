import { Injectable, Signal, computed } from "@angular/core";
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
  currentUser: User | undefined = undefined;

  mockUser: User = {
    id: 1,
    email: "salva@gmail.com",
    avatar: "https://reqres.in/img/faces/1-image.jpg",
    roles: ["user", "admin"],
  };

  private subjectUser$ = new Subject<User | undefined>();

  private currentUser$ = this.subjectUser$.asObservable();
  // user = toSignal(this.currentUser$, { initialValue: undefined });
  user2: Signal<User | undefined> | undefined = undefined;

  constructor(private eventBus: EventBusService) {}

  login(): Observable<boolean> {
    return of(true).pipe(
      delay(1000),
      tap(() => {
        this.user2 = computed(() => this.mockUser);
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
    // this.user = toSignal(this.subjectUser$, { initialValue: undefined });
    this.user2 = computed(() => undefined);
  }
}
