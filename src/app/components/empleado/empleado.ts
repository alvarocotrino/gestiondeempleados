// src/app/services/empleado.service.ts

import { EmpleadoService } from '../../services/empleado';
import {Component, OnInit} from'@angular/core';

@ Component({
  selector: 'app-empleado',
  imports: [], // <-- Esto indica que es un componente standalone
  templateUrl: './empleado.html',
  styleUrls: './empleado.css'
  })
  export class EmpleadoComponent { // <-- ¡ESTA ES LA CLASE QUE SE EXPORTA!

constructor(public empleadoService : EmpleadoService) {
  ngOnInit()
  this.getEmpleado();

  
getEmpleado() {
    this.empleadoService.getEmpleado().subscribe (
      {
      next: data => {
        this.empleadoService.empleados = data as Empleado[];
        
          },
    error: error => {
      console.log(error);
    }
  },
  });