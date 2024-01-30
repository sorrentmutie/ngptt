import { Component } from "@angular/core";
import { NotificationService } from "../../services/notification.service";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-my-notification",
  template: ``,
  styles: ``,
})
export class MyNotificationComponent {
  constructor(
    private toastr: ToastrService,
    private notificationService: NotificationService
  ) {
    this.notificationService.notification$.subscribe((notification) => {
      switch (notification.color) {
        case "success":
          this.toastr.success(notification.message, notification.title);
          break;
        case "danger":
          this.toastr.error(notification.message, notification.title);
          break;
        case "warning":
          this.toastr.warning(notification.message, notification.title);
          break;
        default:
          this.toastr.info(notification.message, notification.title);
          break;
      }
    });
  }
}
