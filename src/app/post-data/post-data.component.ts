import { ApiServiceService } from '../api-service.service';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-data',
  templateUrl: './post-data.component.html',
  styleUrls: ['./post-data.component.css']
})
export class PostDataComponent implements OnInit {

post: any;
title : any;
thumbnail : any;
// loading: boolean = true;
constructor(private _service : ApiServiceService, private route: ActivatedRoute) { }
  ngOnInit() {

    this.title = this.route.snapshot.params.title;

    this._service.getPost(this.title).subscribe( data => {
      this.post = data;
      // this.thumbnail = data;
        // this.loading = false;

      let i = 0;
    });
  }
}