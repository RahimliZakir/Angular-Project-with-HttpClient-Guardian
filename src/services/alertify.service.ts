import { Injectable } from '@angular/core';

declare let alertify: any;

@Injectable({
  providedIn: 'root',
})
export class AlertifyService {
  constructor() {}

  success(msg: string): void {
    alertify.success(msg);
  }

  message(msg: string): void {
    alertify.message(msg);
  }

  warning(msg: string): void {
    alertify.warning(msg);
  }

  error(msg: string): void {
    alertify.error(msg);
  }
}
