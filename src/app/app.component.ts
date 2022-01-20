import { Component } from '@angular/core';
import { RedditAPIService } from './reddit-api.service';
import { Convert, Post } from './RedditPosts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers : [RedditAPIService]
})
export class AppComponent {
  title = 'RedditAPI';
  post: Post = {};

  constructor(private redditAPI : RedditAPIService) {}

  GetPosts(){
    this.redditAPI.GetAllPosts().subscribe(
      (response:any) => {
        console.log(response);
        let postjson = Convert.postToJson(response);
        let post = Convert.toPost(postjson);
        console.log(post);
        this.post = post;
      }
    );
  }
}
