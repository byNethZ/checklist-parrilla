import { Component, Input } from '@angular/core';
import { IStory } from 'src/app/models/content.interface';

@Component({
  selector: 'story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.scss'],
})
export class StoryComponent {
  @Input() item: IStory = {} as IStory;
}
