import { ApiServiceService } from '../api-service.service'
import { IRedditInfo } from '../reddit-info';
import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-reddit-post',
  templateUrl: './reddit-post.component.html',
  styleUrls: ['./reddit-post.component.css']
})


export class RedditPostComponent implements OnInit {

  // constructor( private _service : ApiServiceService) { }

  // redditPosts : IRedditInfo[];
  
  // @Input()title : string;

  
  ngOnInit() {
  //   this._service.getRedditPost().subscribe( (data: any) => {
  //   this.redditPosts = data.data.children ;
  //   console.log(data.data.children);
  // });

}
}