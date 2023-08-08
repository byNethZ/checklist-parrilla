import { Component } from '@angular/core';
import { IStory } from 'src/app/models/content.interface';
import { ContentService } from 'src/app/services/content.service';

@Component({
  selector: 'stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss'],
})
export class StoriesComponent {
  items: IStory[] = [];

  constructor(private _contentService: ContentService) {}

  ngOnInit() {
    this.getPosts();
  }

  getPosts() {
    this._contentService.getStories().subscribe({
      next: (data) => {
        this.items = data.items;
        console.log(this.items);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
