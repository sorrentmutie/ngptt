import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { Observable, map, tap, catchError, throwError } from "rxjs";
import { SpinnerService } from "../services/spinner.service";
import { Injectable } from "@angular/core";


@Injectable({
    providedIn: 'root'
})
export class FirstInterceptor implements HttpInterceptor {

    constructor(private spinnerService: SpinnerService){
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
       this.spinnerService.showSpinner();

       return next.handle(req).pipe(
        tap(response => {
        })
        ,
        map((event: HttpEvent<any>) => {   
            if(event instanceof HttpResponse) {
                this.spinnerService.hideSpinner();
            }
            return event;
        }),
        catchError((errore: HttpErrorResponse) => {
              console.log('Errore');
              this.spinnerService.hideSpinner();
              return throwError(() => new Error('Errore gravissimo'))
        })
        
        );
    }

}