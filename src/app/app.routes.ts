import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { EmpleadoList } from './pages/empleado-list/empleado-list';

export const routes: Routes = [
  { path: '', component: Home },
  { path:"empleados",component: EmpleadoList}, // <-- ¡Aquí están los errores!
];