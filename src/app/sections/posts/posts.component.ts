import { Component, OnInit } from '@angular/core';
import { IPost } from 'src/app/models/content.interface';
import { ContentService } from 'src/app/services/content.service';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  items: IPost[] = [];

  constructor(private _contentService: ContentService) {}

  ngOnInit() {
    this.getPosts();
  }

  getPosts() {
    this._contentService.getPosts().subscribe({
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
