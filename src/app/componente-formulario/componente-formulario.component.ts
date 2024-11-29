import { Component  } from '@angular/core';
import { ServicioTareaService } from '../servicio-tarea.service';
import { Tarea } from '../model/tarea';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-componente-formulario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './componente-formulario.component.html',
  styleUrl: './componente-formulario.component.css'
})
export class ComponenteFormularioComponent {
  titulo: string = '';

  constructor(private tareaService: ServicioTareaService) {} //uar inject

  agregarTarea() {
    const nuevaTarea: Tarea = {
      id: Date.now(), // Generar un ID único
      titulo: this.titulo,
      descripcion:this.titulo,
      completada: false
    };
    this.tareaService.agregarTarea(nuevaTarea).subscribe(() => {
      this.titulo = ''; // Limpiar el campo de entrada
    });
  }
}