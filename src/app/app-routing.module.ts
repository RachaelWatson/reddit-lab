import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { RedditPostComponent } from './reddit-post/reddit-post.component';
import { PostDataComponent } from './post-data/post-data.component';
// import { PostDetailsComponent } from './post-details/post-details.component';
// import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const appRoutes: Routes = [
  // { path: 'reddit', component: RedditPostComponent },
  { path: 'reddit/:redditId', component: PostDataComponent },
  // { path: '', redirectTo: '/reddit', pathMatch: 'full' },
  { path: '**', component: RedditPostComponent }
  ];

@NgModule({
  // declarations: [],
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
