import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
  readonly URL_API = 'https://localhost:3000/api/empleados'; // Cambia esto por tu URL real

  empleados:Empleado[];
  
  constructor (private http: HttpClient) { 
    this.empleados = [];

  }
  getEmpleados() {
    return this.http.get<Empleado[]>(this.URL_API);
  }
}