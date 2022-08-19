import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import Swal from 'sweetalert2';
import { EmpleadoService } from '../../service/empleado.service';

@Component({
  selector: 'app-editar-empleado',
  templateUrl: './editar-empleado.component.html',
  styleUrls: ['./editar-empleado.component.css']
})
export class EditarEmpleadoComponent implements OnInit {

  id : any;

  empleado = {
    id_empleado : '',
    brm : '',
    nombre : '',
    foto : '',
    puesto : ''
  }

  constructor( public service : EmpleadoService, private route : ActivatedRoute, private router : Router ) { }

  ngOnInit(): void {
    this.cargarEmpleado();
  }

  private cargarEmpleado() {
    this.service.getEmpleado( this.obtenerID() ).subscribe( data => {
      console.log( " Empleado : ", data[0] );
      this.empleado = data[0];
    })


  }

  private obtenerID() {
    this.route.params.subscribe( ( params : Params ) => {
      this.id = params['id'];

    });

    return this.id;
  }

  public cargarArchivo( fileInput : any ) {
    this.empleado.foto = fileInput.files[0].name;
  }

  public onSubmit() {
    this.service.editarEmpleado( this.empleado, this.id ).subscribe( emp => {
      Swal.fire(
        'Modificación Exitosa!',
        emp.message,
        'success' 
      )

      this.router.navigate(["/empleados/listar-empleados"]);

    })
  }

}
