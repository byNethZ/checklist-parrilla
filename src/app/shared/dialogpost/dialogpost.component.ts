import { Component, Inject } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';

@Component({
  selector: 'app-dialogpost',
  templateUrl: './dialogpost.component.html',
  standalone: true,
  styleUrls: ['./dialogpost.component.scss'],
  imports: [MatDialogModule],
})
export class DialogpostComponent {
  constructor(
    public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  close(): void {
    this.dialogRef.close();
  }
}
