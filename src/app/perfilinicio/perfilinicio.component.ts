import { Component , OnInit} from '@angular/core';
import { NavSimpleComponent } from "../nav-simple/nav-simple.component";
import { DatosService } from '../../services/datos.service';
import { FormBuilder } from '@angular/forms';
import { RegisterComponent } from '../register/register.component';
import { CommService } from '../service/comm.service';
import { NavperfilComponent } from "../navperfil/navperfil.component";
import { sidebarComponent } from "../sidebar/sidebar.component";
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-perfilinicio',
    standalone: true,
    templateUrl: './perfilinicio.component.html',
    styleUrl: './perfilinicio.component.scss',
    imports: [NavSimpleComponent, sidebarComponent,RouterModule]
})

export class PerfilInicioComponent implements OnInit{
    datos!:FormBuilder;
    id:any;
    nombre:any;
    apellido:any;
    oficio1:any;
    oficio2:any;
    correo:any;
    edad:any;
    telefono=''
    ubicacion:any
    /*ngOnInit(){
        this.datos=this.servicioDatos.getCompartirDatos();
        console.log(this.datos);
    }*/
    

    constructor(private servicioDatos:DatosService,private comm: CommService){}

    ngOnInit(): void {
        this.comm.datos$.subscribe((datos: any[]) => {
          if (datos && datos.length > 0) {
            const primerObjeto = datos[0];
            this.id=primerObjeto.ID
            this.nombre = primerObjeto.nombre;
            this.apellido = primerObjeto.apellido;
            this.correo = primerObjeto.correo;
            this.oficio1 = primerObjeto.oficio1;
            this.oficio2 = primerObjeto.oficio2;
            this.edad=primerObjeto.edad;
            this.ubicacion=primerObjeto.ubicacion
          }
        });
      }
}
