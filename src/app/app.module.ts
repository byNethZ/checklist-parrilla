import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { PostsComponent } from './sections/posts/posts.component';
import { StoriesComponent } from './sections/stories/stories.component';
import { PostComponent } from './shared/post/post.component';
import { StoryComponent } from './shared/story/story.component';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { ButtonsApprovedComponent } from './shared/buttons-approved/buttons-approved.component';
import { StoreModule } from '@ngrx/store';
import { approverReducer } from './state/reducers/reducer';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PostsComponent,
    StoriesComponent,
    PostComponent,
    StoryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatDialogModule,
    ButtonsApprovedComponent,
    StoreModule.forRoot(
      {
        approver: approverReducer,
      },
      {}
    ),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
