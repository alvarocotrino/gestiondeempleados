import { Component } from '@angular/core';
import { Empleado } from '../../components/empleado/empleado'; // Importa otro componente standalone

@Component({
  selector: 'app-empleado-list',
  imports: [Empleado], // <-- Esto indica que es un componente standalone
  templateUrl: './empleado-list.html',
  styleUrl: './empleado-list.css'
})
export class EmpleadoList {
  // ...
}