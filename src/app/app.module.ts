import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule  } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpleadoService } from './components/service/empleado.service';
import { ListarEmpleadosComponent } from './components/empleados/listar-empleados/listar-empleados.component';
import { GuardarEmpleadoComponent } from './components/empleados/guardar-empleado/guardar-empleado.component';
import { EditarEmpleadoComponent } from './components/empleados/editar-empleado/editar-empleado.component';
import { NotFoundComponent } from './components/Error/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarEmpleadosComponent,
    GuardarEmpleadoComponent,
    EditarEmpleadoComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,
    SweetAlert2Module
  ],
  providers: [ EmpleadoService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
