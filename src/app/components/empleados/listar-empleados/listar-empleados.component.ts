import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { EmpleadoService } from '../../service/empleado.service';

const swalWithBootstrapButtons = Swal.mixin({
  customClass: {
    confirmButton: 'btn btn-success',
    cancelButton: 'btn btn-danger'
  },
  buttonsStyling: false
})

@Component({
  selector: 'app-listar-empleados',
  templateUrl: './listar-empleados.component.html',
  styleUrls: ['./listar-empleados.component.css']
})
export class ListarEmpleadosComponent implements OnInit {

  datos : String = "Datos";
  pages = 1;
  empleado = {
    brm : '',
    nombre : '',
    foto : '',
    puesto : ''
  }
  empleadosList : any = [];

  constructor( public service : EmpleadoService, private route : ActivatedRoute, private router : Router ) { }

  ngOnInit(): void {
    this.cargarEmpleados();
  }

  private cargarEmpleados() {
    this.service.getEmpleados().subscribe( data => {
      console.log("Data : ", data);
      this.empleadosList = data;
    })
  }

  public cargarArchivo( fileInput : any ) {
    this.empleado.foto = fileInput.files[0].name;
  }

  onSubmit() {
    this.guardarEmpleado();
  }

  public guardarEmpleado() {

    this.service.guardarEmpleado(this.empleado).subscribe( result => {
      console.log("Empleado Guardado : ", result);

      Swal.fire(
        'Registro Exitoso!',
         result.message,
        'success' 
      )

      setTimeout(() => {
        window.location.reload();
      }, 2500);

    });

  }

  public eliminarEmpleado( id : any ) {

    swalWithBootstrapButtons.fire({
      title: '¿Esta Seguro que Desea Eliminar a Este Empleado?',
      text: "No Seras Capaz de Revertir Esto!.",
      showCancelButton: true,
      confirmButtonText: 'Eliminar!',
      cancelButtonText: 'Cancelar',
      reverseButtons: true
    }).then((result) => {
      console.log("Result : ", result);
      if (result.value) {

        this.service.eliminarEmpleado( parseInt(id)).subscribe( res => {

          // setTimeout(() => {
          //   window.location.reload();
          // }, 3000);

          swalWithBootstrapButtons.fire(
            'Eliminado!',
            'El Empleado con el Id : ' + id + " ha Sido Eliminado!.",
            'success'
          )

          this.router.navigate(['empleados/listar-empleados'])
          .then(() => {
            
            setTimeout(() => {
              window.location.reload();
            }, 2500);

          });
    
        })

      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelado',
          'Tu Empleado Esta a Salvo',
          'error'
        )
      }
    })



  }

}
