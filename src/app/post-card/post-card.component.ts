import { Component, OnInit, Input } from '@angular/core';
import { BlogPost } from '../BlogPost';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html'})
export class PostCardComponent implements OnInit {

  @Input() post: BlogPost;

  constructor() { }

  ngOnInit() {
  }

}
