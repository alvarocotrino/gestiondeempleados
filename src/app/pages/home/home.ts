import { Component } from '@angular/core';
import { Carrusel } from '../../components/carrusel/carrusel';
import { Tarjetas } from '../../components/tarjetas/tarjetas';

@Component({
  selector: 'app-home',
  imports: [Carrusel,Tarjetas],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
