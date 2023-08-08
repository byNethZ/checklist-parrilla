import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DialogpostComponent } from '../dialogpost/dialogpost.component';
import { ContentService } from 'src/app/services/content.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'buttons-approved',
  templateUrl: './buttons-approved.component.html',
  styleUrls: ['./buttons-approved.component.scss'],
  standalone: true,
})
export class ButtonsApprovedComponent {
  @Input() id: number = 0;

  @Output() close = new EventEmitter<any>();

  constructor(
    private _contentService: ContentService,
    public dialog: MatDialog
  ) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogpostComponent, {
      data: { id: this.id },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }

  action(approved: boolean) {
    console.log(this.id, approved);
    this.close.emit({ id: this.id, approved: approved });
  }
}
