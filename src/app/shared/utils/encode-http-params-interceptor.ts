import {HttpEvent, HttpHandler, HttpInterceptor, HttpParameterCodec, HttpParams, HttpRequest} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

@Injectable()
export class EncodeHttpParamsInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const body = (req.body instanceof HttpParams) ? new HttpParams({encoder: new CustomEncoder(), fromString: req.body.toString()}) : req.body;
    const params = (req.params instanceof HttpParams) ? new HttpParams({encoder: new CustomEncoder(), fromString: req.params.toString()}) : req.params;
    return next.handle(req.clone({body, params}));
  }
}


export class CustomEncoder implements HttpParameterCodec {
  encodeKey(key: string): string {
    return encodeURIComponent(key);
  }

  encodeValue(value: string): string {
    return encodeURIComponent(value);
  }

  decodeKey(key: string): string {
    return decodeURIComponent(key);
  }

  decodeValue(value: string): string {
    return decodeURIComponent(value);
  }
}
