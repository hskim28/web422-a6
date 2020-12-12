import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Router, ActivatedRoute } from '@angular/router';
import { BlogPost } from '../BlogPost';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html'
})

export class EditPostComponent implements OnInit {

  blogPost:BlogPost;
  tags: string;

  constructor(private posts:PostService, private route:Router, private aRoute:ActivatedRoute) { }

  ngOnInit(): void {
    let id =this.aRoute.snapshot.params['id'];
    this.posts.getPostById(id).subscribe(data=>{
      this.blogPost=data;
      this.tags=this.blogPost.tags.toString();
    });        
  }


  formSubmit(){  
    
    if(this.tags){
        this.blogPost.tags=this.tags.split(",").map(tag => tag.trim());
    }
    else{
        this.blogPost.tags=null;
    }
    
    this.posts.updatePostById(this.blogPost._id, this.blogPost).subscribe(data=>{ 
        this.blogPost=data;
        this.route.navigate(['admin']);
        });    
  }

  deletePost(){    
    this.posts.deletePostById(this.blogPost._id).subscribe(data=>{
        this.blogPost=data; 
        this.route.navigate(['admin']);
    });   
  }

}

