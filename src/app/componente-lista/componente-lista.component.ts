import { Component } from '@angular/core';
import { Tarea } from '../model/tarea';
import { ServicioTareaService } from '../servicio-tarea.service';
import { FormsModule } from '@angular/forms';
import { ComponenteElementoComponent } from "../componente-elemento/componente-elemento.component";

@Component({
  selector: 'app-componente-lista',
  standalone: true,
  imports: [FormsModule, ComponenteElementoComponent],
  templateUrl: './componente-lista.component.html',
  styleUrl: './componente-lista.component.css'
})
export class ComponenteListaComponent {
  tareas: Tarea[] = [];

  constructor(private tareaService: ServicioTareaService) {}

  ngOnInit() {
    this.cargarTareas();
  }

  cargarTareas() {
    this.tareaService.obtenerTareas().subscribe(tareas => {
      this.tareas = tareas;
    });
  }
  eliminarTarea(id: number) {
    this.tareaService.eliminarTarea(id).subscribe(() => {
      this.cargarTareas(); // Recargar la lista después de eliminar
    });
  }

  alternarTarea(tarea: Tarea) {
    this.tareaService.alternarTareaCompletada(tarea).subscribe(() => {
      this.cargarTareas(); // Recargar la lista después de alternar
    });
  }

}
