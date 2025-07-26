// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { Home } from './pages/home/home'; // <-- ¡Importación y ruta de archivo corregidas!
import { Empleadolist} from './pages/empleado-list/empleado-list'; // <-- ¡Importación y ruta de archivo corregidas!

export const routes: Routes = [
  { path: '', component: Home }, // <-- ¡Uso de nombre de clase corregido!
  { path: "empleado", component: Empleadolist}, 
 ];