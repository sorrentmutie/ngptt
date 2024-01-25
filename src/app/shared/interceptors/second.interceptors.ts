import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";

export class SecondInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
       console.log('Second Interceptor is working');

       const modifiedRequest = req.clone({
          setHeaders: { 'X-Request-Id': '1234567890'}
       })
 
       console.log(modifiedRequest);

       return next.handle(modifiedRequest);
    }

}