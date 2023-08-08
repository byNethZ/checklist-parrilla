import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IPost } from 'src/app/models/content.interface';
import { ContentService } from 'src/app/services/content.service';

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent {
  public businessName: string = '';
  @Input() item: IPost = {} as IPost;

  constructor(private contentService: ContentService) {
    this.businessName = this.contentService.getBusinessName();
  }
}
