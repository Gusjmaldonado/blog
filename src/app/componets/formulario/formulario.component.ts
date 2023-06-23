import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BlogsService } from 'src/app/services/blogs.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  blogService = inject(BlogsService)

  formulario: FormGroup


  constructor() {
    this.formulario = new FormGroup({
      titulo: new FormControl(null, [Validators.required]),
      texto: new FormControl(null, [Validators.required]),
      autor: new FormControl(null, [Validators.required]),
      imagen: new FormControl(null, [Validators.required]),
      fecha: new FormControl(null, [Validators.required]),
      categoria: new FormControl(null, [Validators.required]),
    })
  }

  ngOnInit() {
    return this.formulario
  }

  onSubmit() {
    this.blogService.create(this.formulario.value)
  }

}
