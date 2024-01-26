import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { Observable, map, tap, catchError, throwError } from "rxjs";

export class FirstInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log('First Interceptor is working');
        console.log(req);

       return next.handle(req).pipe(
        tap(response => {
        })
        ,
        map((event: HttpEvent<any>) => {   
            if(event instanceof HttpResponse) {
                console.log('First Interceptor response')
                console.log(event);
                    
            }
            return event;
        }),
        catchError((errore: HttpErrorResponse) => {
              console.log('Errore');
              return throwError(() => new Error('Errore gravissimo'))
        })
        
        );
    }

}