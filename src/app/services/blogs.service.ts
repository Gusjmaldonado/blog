import { Injectable } from '@angular/core';
import { Post } from '../interfaces/post.interface';

@Injectable({
  providedIn: 'root'
})
export class BlogsService {

  private arrPost: Post[]
  post: string

  constructor() {
    this.post = ''
    this.arrPost = [{
      titulo: 'Mural',
      texto: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. A sequi fuga excepturi distinctio quas voluptatibus incidunt maiores perferendis dolor ipsam veritatis nostrum itaque dignissimos molestiae modi voluptas, doloremque odio dolores inventore. Nemo tenetur porro quo, nihil beatae explicabo ipsum dolorum nam possimus qui repudiandae nostrum minima sequi nobis architecto! Magnam, odio cupiditate recusandae alias sapiente omnis tenetur soluta dolore ipsum.',
      autor: 'Desconocido',
      imagen: 'https://share.america.gov/wp-content/uploads/2016/07/Lee-Graffiti-photo-C-Ahearn-Edit.jpg',
      fecha: '16/06/2023',
      categoria: 'mural'
    },
    {
      titulo: 'Bomba',
      texto: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis laudantium facilis in enim dolores. Praesentium error nobis aspernatur impedit! Voluptatibus, aliquid, excepturi perferendis eos delectus adipisci labore odit inventore asperiores praesentium temporibus quisquam, neque enim cupiditate? Deserunt, amet veritatis magnam fuga ea laborum beatae? Nisi harum modi sit expedita obcaecati!',
      autor: 'Desconocido',
      imagen: 'https://sinalefa1.files.wordpress.com/2009/03/cope104.jpg?w=320&h=240',
      fecha: '16/06/2023',
      categoria: 'bomba'
    },
    {
      titulo: 'Tag',
      texto: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur rem eius saepe libero, hic magnam at repellat inventore distinctio voluptatibus.',
      autor: 'Desconocido',
      imagen: 'https://www.waynearthurgallery.com/wp-content/uploads/2023/01/Graffiti-Tag.jpg',
      fecha: '16/06/2023',
      categoria: 'tag'
    }];


  }

  getAll(): Post[] {
    return this.arrPost;
  }

  create(nuevoPost: Post): void {
    this.arrPost.push(nuevoPost);
    console.log(this.arrPost);

  }

  getByCategoria(categoria: string): Post[] {
    return this.arrPost.filter(post => post.categoria === categoria)
  }

  getCategorias(): string[] {
    return [...new Set(this.arrPost.map(post => post.categoria))];
  }

}
