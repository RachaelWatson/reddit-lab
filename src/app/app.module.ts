import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { RedditPostComponent } from './reddit-post/reddit-post.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PostDataComponent } from './post-data/post-data.component';


@NgModule({
  declarations: [
    AppComponent,
    RedditPostComponent,
    PostDetailsComponent,
    PageNotFoundComponent,
    PostDataComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// import { RouterModule } from '@angular/router';


