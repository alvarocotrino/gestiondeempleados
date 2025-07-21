import { Component } from '@angular/core';
import { EmpleadoService } from '../../services/empleado'; // Asegúrate de que la ruta sea correcta

@Component({
  selector: 'app-empleado',
  imports: [],
  templateUrl: './empleado.html',
  styleUrl: './empleado.css'
})
export class EmpleadoComponent {
constructor(public empleadoService: EmpleadoService) {
    // Aquí puedes inicializar cualquier lógica necesaria
  }

getEmpleados() {
    this.empleadoService.getEmpleados().subscribe( {
     next: (data)=> {
        this.empleadoService.empleado = data;
      },

      error: (error) => {
        console.error('Error al obtener empleados:', error);
      }
     


    });
  }

}
