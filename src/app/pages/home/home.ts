import { Component } from '@angular/core';
import { Carrusel } from '../../components/carrusel/carrusel';
import { Tarjetas } from '../../components/tarjetas/tarjetas';
import { Footer } from '../../components/footer/footer';

@Component({
  selector: 'app-home',
  imports: [Carrusel,Tarjetas, Footer],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
