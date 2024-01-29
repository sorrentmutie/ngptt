import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from "@angular/common/http";
import { Observable, map, tap, catchError, throwError } from "rxjs";
import { SpinnerService } from "../services/spinner.service";
import { Injectable } from "@angular/core";
import { NotificationService } from "../services/notification.service";

@Injectable({
  providedIn: "root",
})
export class FirstInterceptor implements HttpInterceptor {
  constructor(
    private spinnerService: SpinnerService,
    private notificaService: NotificationService
  ) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.spinnerService.showSpinner();

    return next.handle(req).pipe(
      tap((response) => {}),
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          this.spinnerService.hideSpinner();
          this.notificaService.showNotification({
            title: "Richiesta completata",
            message: "La richiesta è stata completata con successo",
            color: "success",
          });
        }
        return event;
      }),
      catchError((errore: HttpErrorResponse) => {
        console.log("Errore");
        this.spinnerService.hideSpinner();
        if (errore.status === 404) {
          this.notificaService.showNotification({
            title: "Richiesta fallita",
            message: "L'indirizzo richiesto è inesistente",
            color: "danger",
          });
        } else if (errore.status === 0) {
          this.notificaService.showNotification({
            title: "Richiesta fallita",
            message: "Dominio inesistente",
            color: "danger",
          });
        }

        return throwError(() => new Error("Errore gravissimo"));
      })
    );
  }
}
