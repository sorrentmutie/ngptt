import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { MyNotification } from "../models/my-notification";

@Injectable({
  providedIn: "root",
})
export class NotificationService {
  private subject$ = new Subject<MyNotification>();

  notification$ = this.subject$.asObservable();

  showNotification(notification: MyNotification) {
    this.subject$.next(notification);
  }
}
