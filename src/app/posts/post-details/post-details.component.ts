import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {
  postId!: number;
  post: any;
  posts = [
    { id: 1, title: 'Publicación 1', content: 'Contenido de la publicación 1' },
    { id: 2, title: 'Publicación 2', content: 'Contenido de la publicación 2' },
    { id: 3, title: 'Publicación 3', content: 'Contenido de la publicación 3' }
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.postId = +params.get('id')!;
      this.post = this.findPostDetails(this.postId);
    });
  }

  findPostDetails(id: number) {
    return this.posts.find(post => post.id === id);
  }
}