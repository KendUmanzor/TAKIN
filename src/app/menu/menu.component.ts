import { Component, OnInit, inject } from '@angular/core';
import { sidebarComponent } from '../sidebar/sidebar.component';
import { NavSimpleComponent } from "../nav-simple/nav-simple.component";
import { FootComponent } from '../foot/foot.component';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { ServicesService } from '../service/services.service';
import { DatosService } from '../../services/datos.service';
import { EmpleadosRegistro, Empleadosbusquedad } from '../../interfaces/empleados';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-menu',
    standalone: true,
    templateUrl: './menu.component.html',
    styleUrl: './menu.component.scss',
    imports: [NavSimpleComponent, sidebarComponent, FootComponent,RouterModule]
})
export class MenuComponent  {
    perfil!:EmpleadosRegistro;
    http=inject(HttpClient);
    router=inject(Router);
  
    constructor(private servicioDatos:DatosService){
    
      this.http.post("http://127.0.0.1:8000/perfil",JSON.stringify(this.servicioDatos.getCompartirDatos('credenciales'))).subscribe((data:any)=>{
      this.perfil=data.data;
      console.log(this.perfil);
      });
    }

    borrarCuenta(perfil: EmpleadosRegistro): void {
        this.http.delete(`http://127.0.0.1:8000/perfil/${perfil.email}`).subscribe((data) => {
          alert(data);
          this.router.navigate(['./']).then();
        });
      }
}
