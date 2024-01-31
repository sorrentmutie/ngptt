import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";
import { AuthService } from "../services/auth.service";
import { NotificationService } from "../services/notification.service";

export const randomGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  const notificaService = inject(NotificationService);
  if (
    authService.isLoggedIn &&
    authService.user2()?.roles.includes("admin")
  ) {
    return true;
  } else {
    notificaService.showNotification({
      title: "Error",
      message: "You are not allowed to access this page",
      color: "warning",
    });
    router.navigate(["welcome"]);
    return false;
  }
};
