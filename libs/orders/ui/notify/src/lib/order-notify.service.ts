import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { OrderNotifyFailureComponent } from './component/order-notify-failure/order-notify-failure.component';
import { OrderNotifySuccessComponent } from './component/order-notify-success/order-notify-success.component';

@Injectable()
export class OrderNotifyService {
  constructor(private readonly matDialog: MatDialog) {}

  openSuccessDialog(): void {
    this.matDialog.open(OrderNotifySuccessComponent, { width: '500px' });
  }

  openFailureDialog(): void {
    this.matDialog.open(OrderNotifyFailureComponent, { width: '500px' });
  }
}
