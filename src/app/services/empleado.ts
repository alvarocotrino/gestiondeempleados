// src/app/services/empleado.service.ts
import { Empleado } from '../models/empleado';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
  readonly URl_API = 'http://localhost:3000/api/empleados'; // Cambia esto según tu configuración
  empleados:Empleado[];//aqui usas la clase empleado como tipo

  constructor(private  http: HttpClient) { 
    this.empleados=[]; //inicializas el array de empleados
  }
  getEmpleados() {
    return this.http.get<Empleado[]>(this.URl_API); // Devuelve un Observable de Empleado[]
  }
}