import { Component, OnInit } from '@angular/core';
import {PostService} from '../post.service';
import {Router} from '@angular/router';
import{BlogPost} from '../BlogPost';


@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html'  
})

export class NewPostComponent implements OnInit {

  blogPost: BlogPost = new BlogPost();
  tags: string
  constructor(private posts:PostService, private route : Router) { }

  ngOnInit(): void { }

  formSubmit(){

    if(this.tags){this.blogPost.tags=this.tags.split(",").map(tag => tag.trim());}

    this.blogPost.isPrivate=false;
    this.blogPost.postDate=new Date().toLocaleDateString();
    this.blogPost.postedBy="WEB422 Student";
    this.blogPost.views=0;

    this.posts.newPost(this.blogPost).subscribe(data=>{
        this.blogPost=data;
        this.route.navigate(['admin']);
      })

  }

}

