// src/app/pages/empleado-list/empleado-list.component.ts
// src/app/pages/empleado-list/empleado-list.component.ts

import { Component } from '@angular/core';
import { Empleado } from '../../models/empleado';

@Component({
  selector: 'app-empleado-list',
 templateUrl: './empleado-list.html', 
  styleUrl: './empleado-list.css'
})
export class Empleadolist{
  empleados: Empleado[] = [];

  constructor() { }
}
 

