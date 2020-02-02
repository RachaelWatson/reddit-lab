import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RedditPostComponent } from './reddit-post/reddit-post.component';


const appRoutes: Routes = [


  { path: '', component: RedditPostComponent }
  ];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }






// import { PostDetailsComponent } from './post-details/post-details.component';

  // { path: 'reddit', component: RedditPostComponent },
  // { path: 'reddit/:redditId', component: PostDataComponent },
  // { path: '', redirectTo: '/reddit', pathMatch: 'full' },