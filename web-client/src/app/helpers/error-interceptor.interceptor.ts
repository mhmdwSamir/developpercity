import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthenticationService } from '../services/authentication.service';
@Injectable()
export class ErrorInterceptorInterceptor implements HttpInterceptor {

  constructor(private _authService : AuthenticationService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
   let errorMessage = "";
    return next.handle(request).pipe(
     catchError(err => {
     // handle network error 
      if(err instanceof HttpErrorResponse){
       // handle it 
       console.log( " err instanceof HttpErrorResponse ", err)
        if(!navigator.onLine){
         // handle offline error 
         console.log("navigator.onLine)" , navigator.onLine)
         errorMessage = `Error: No Network Connection  !!`;
         }else{
           // handle err.status === 404 , 403 , 501
          // this._authService.logout();
           console.log(err.error.message)
           errorMessage = `Error: `;
          } 
       } else if (err instanceof ErrorEvent) {
        // client-side error
        console.log(err.error.message)
          errorMessage = `Error: }`;
         
       }
        const error = err.error.message || err.statusText;
        console.log("error  that throw "  , error)
        return throwError(error);
    }))
  }
}
  

  

        // if (err.status === 401) {
        //     // auto logout if 401 response returned from api
        //     this._authService.logout();
        //     // what is the alternative to it 
        //     location.reload(true);
        // }
