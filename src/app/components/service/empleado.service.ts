import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  private urlEndPoint = "http://localhost:3000";

  constructor( private http : HttpClient ) { }

  public getEmpleados() : Observable<any> {
    return this.http.get( this.urlEndPoint + "/empleados" );
  }

  public getEmpleado( id : any ) : Observable<any> {
    return this.http.get( this.urlEndPoint + "/empleado/" + id );
  }

  public guardarEmpleado( empleado : any ) : Observable<any> {
    return this.http.post( this.urlEndPoint + "/empleado", empleado );
  }

  public editarEmpleado( empleado : any, id : any ) : Observable<any> {
    return this.http.put( this.urlEndPoint + "/empleado/" + id, empleado );
  }

  public eliminarEmpleado( id : any ) : Observable<any> {
    return this.http.delete( this.urlEndPoint + "/empleado/" + id );
  }

}
