import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { LoaderService } from './loader.service'; // Import LoaderService to control loader visibility

@Injectable()
export class HttpLoaderInterceptor implements HttpInterceptor {
  constructor(private loaderService: LoaderService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Show loader before making a request
    this.loaderService.showLoader();

    return next.handle(request).pipe(
      finalize(() => {
        // Hide loader after response is received
        this.loaderService.hideLoader();
      })
    );
  }
}
