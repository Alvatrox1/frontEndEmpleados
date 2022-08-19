import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarEmpleadoComponent } from './components/empleados/editar-empleado/editar-empleado.component';
import { ListarEmpleadosComponent } from './components/empleados/listar-empleados/listar-empleados.component';
import { NotFoundComponent } from './components/Error/not-found/not-found.component';

const routes: Routes = [
  { path : "", component : ListarEmpleadosComponent },
  { path : "empleados/listar-empleados", component : ListarEmpleadosComponent },
  { path : "empleados/editar-empleado/:id", component : EditarEmpleadoComponent },
  { path: "**", component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
