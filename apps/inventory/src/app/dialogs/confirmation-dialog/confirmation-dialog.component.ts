import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'inventory-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.css'],
})
export class ConfirmationDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<ConfirmationDialogComponent>,
    @Inject(MAT_DIALOG_DATA)
    public dialogData: {
      titleText: string;
      bodyText: string;
      cancelText: string;
      approveText: string;
    }
  ) {}

  onCancelClick() {
    this.dialogRef.close(false);
  }

  onConfirmClick() {
    this.dialogRef.close(true);
  }
}
