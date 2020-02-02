import { Component, OnInit, Input } from '@angular/core';
// import { RedditPostComponent } from './reddit-post/reddit-post.component'
import { IRedditInfo } from '../reddit-info';
import { ApiServiceService} from '../api-service.service'


@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

// @Input() RedditPostComponent;

redditPosts : IRedditInfo[];

@Input()title : string;

@Input() thumbnail : string; 

@Input() url : string;

constructor( private _service : ApiServiceService) { }

 ngOnInit() {  this._service.getRedditPost().subscribe( (data: any) => {
  this.redditPosts = data.data.children ;
  console.log(data.data.children);
});
 }

 }

