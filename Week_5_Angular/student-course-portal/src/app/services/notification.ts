import { Injectable } from '@angular/core';

// Component-level providers create a new NotificationService
// instance for each NotificationComponent. This means every
// component has its own independent notification state.

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  private message = '';

  setMessage(msg: string): void {
    this.message = msg;
  }

  getMessage(): string {
    return this.message;
  }
}
