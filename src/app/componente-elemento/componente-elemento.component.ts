import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Tarea } from '../model/tarea';

@Component({
  selector: 'app-componente-elemento',
  standalone: true,
  imports: [],
  templateUrl: './componente-elemento.component.html',
  styleUrl: './componente-elemento.component.css'
})
export class ComponenteElementoComponent {
  @Input() tarea!: Tarea; // Recibe la tarea como entrada
  @Output() eliminar = new EventEmitter<number>(); // Emite el ID de la tarea a eliminar
  @Output() alternar = new EventEmitter<Tarea>(); // Emite la tarea para alternar su estado

  onEliminar() {
    this.eliminar.emit(this.tarea.id); // Emitir el ID de la tarea a eliminar
  }

  onAlternar() {
    this.alternar.emit(this.tarea); // Emitir la tarea para alternar su estado
  }
}