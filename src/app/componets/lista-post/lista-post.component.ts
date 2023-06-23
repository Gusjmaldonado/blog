import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/interfaces/post.interface';
import { BlogsService } from 'src/app/services/blogs.service';


@Component({
  selector: 'app-lista-post',
  templateUrl: './lista-post.component.html',
  styleUrls: ['./lista-post.component.css']
})
export class ListaPostComponent {

  activatedRoute = inject(ActivatedRoute)
  blogService = inject(BlogsService)


  posts: Post[]
  categorias: string[]

  constructor() {

    this.posts = []
    this.categorias = []

  }

  ngOnInit() {
    this.posts = this.blogService.getAll()
    this.categorias = this.blogService.getCategorias()
  }


  cambiarCategoria($event: any) {
    if ($event.target.value === 'categorias') {
      this.posts = this.blogService.getAll()
    } else {

      this.posts = this.blogService.getByCategoria($event.target.value)
    }

  }

}
