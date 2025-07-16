import { Component } from '@angular/core';

@Component({
  selector: 'app-tarjetas',
  standalone: true, // <--- ¡Esta línea es clave si es standalone!
  imports: [], // Si no necesitas importar nada más, déjalo vacío o quítalo
  templateUrl: './tarjetas.html',
  styleUrl: './tarjetas.css'
})
export class Tarjetas {
  // ...
}