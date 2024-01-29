import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
  inject,
} from "@angular/core";
import { IMenuItem } from "./menu.interfcae";
import { AuthService } from "../../services/auth.service";
import { User } from "../../../users/models/user";
import { Router } from "@angular/router";
import { CustomersService } from "../../../customers/customers.service";
import { Customer } from "../../../customers/customer";
import { EventBusService } from "../../services/event-bus.service";
import { Events } from "../../services/events";
import { NotificationService } from "../../services/notification.service";

@Component({
  selector: "app-menu",
  template: `
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Navbar</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <!-- @for( listItem of menuList; track listItem.label) {
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="{{listItem.link}}">{{listItem.label}}</a>
          </li>
        } -->

            <li class="nav-item">
              <span>{{ lastCustomer?.name }}</span>
            </li>

            <li class="nav-item">
              <a
                class="nav-link"
                routerLinkActive="active"
                routerLink="/random"
                aria-current="page"
                >Random Users</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                routerLinkActive="active"
                routerLink="/reqres"
                aria-current="page"
                >ReqRes</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                routerLinkActive="active"
                routerLink="/products"
                aria-current="page"
                >Products</a
              >
            </li>

            <li *ngIf="!currentUser; else log">
              <button (click)="login()">Log in</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <ng-template #log>
      <li>
        <span>{{ currentUser?.email }}</span>
        <img src="{{ currentUser?.avatar }}" />
        <button (click)="logout()">Logout</button>
      </li>
    </ng-template>
  `,
})
export class MenuComponent implements OnInit {
  currentUser: User | undefined = undefined;

  constructor(
    private cdr: ChangeDetectorRef,
    private authService: AuthService,
    private router: Router,
    private customersService: CustomersService,
    private eventBusService: EventBusService,
    private notificationService: NotificationService
  ) {}

  @Input() menuList: IMenuItem[] = [];
  counter: number = 0;
  lastCustomer: Customer | undefined = undefined;

  ngOnInit(): void {
    this.eventBusService.on(Events.CustomerCreated, (customer: Customer) => {
      this.lastCustomer = customer;
    });

    this.eventBusService.on(Events.UserLoggedIn, (user: User) => {
      console.log("User logged in", user);
      this.notificationService.showNotification({
        title: "Login",
        message: user.email + " ha effettuato la login",
        color: "info",
      });
    });

    this.authService.currentUser$.subscribe((user) => {
      this.currentUser = user;
    });
  }

  refreshList() {
    this.cdr.detectChanges();
  }

  logout() {
    this.notificationService.showNotification({
      title: "Logout",
      message: "Logout effettuato con successo",
      color: "info",
    });
    this.authService.logout();
    this.router.navigate(["welcome"]);
  }

  login() {
    this.router.navigate([""]);
    this.customersService.customers$.subscribe(
      (customer) => (this.lastCustomer = customer)
    );
  }
}
