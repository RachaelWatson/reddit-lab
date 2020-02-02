import { ApiServiceService } from '../api-service.service'
import { IRedditInfo } from '../reddit-info';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-reddit-post',
  templateUrl: './reddit-post.component.html',
  styleUrls: ['./reddit-post.component.css']
})


export class RedditPostComponent implements OnInit {

  constructor( private _service : ApiServiceService) { }

  redditPosts : IRedditInfo[];
  
  ngOnInit() {
    this._service.getRedditPost().subscribe( (data: any) => {
    this.redditPosts = data.children ;
    console.log(data.children);
  });

}
}