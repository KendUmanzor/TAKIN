import { Component , OnInit, inject} from '@angular/core';
import { NavSimpleComponent } from "../nav-simple/nav-simple.component";
import { DatosService } from '../../services/datos.service';
import { FormBuilder } from '@angular/forms';
import { RegisterComponent } from '../register/register.component';
import { CommService } from '../service/comm.service';
import { NavperfilComponent } from "../navperfil/navperfil.component";
import { sidebarComponent } from "../sidebar/sidebar.component";
import { ChatComponent } from "../chat/chat.component";
import { CalificacionComponent } from "../calificacion/calificacion.component";
import { HttpClient } from '@angular/common/http';
import { EmpleadosRegistro } from '../../interfaces/empleados';
import { FormsModule } from '@angular/forms';

import {FormControl, FormGroup,  Validators , ReactiveFormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';
@Component({
    selector: 'app-perfil',
    standalone: true,
    templateUrl: './perfil.component.html',
    styleUrl: './perfil.component.scss',
    imports: [NavSimpleComponent, NavperfilComponent, sidebarComponent, ChatComponent, CalificacionComponent,ReactiveFormsModule,FormsModule,RouterModule]
})
export class PerfilComponent implements OnInit{
    datos!:FormBuilder
    perfil!:EmpleadosRegistro;
    http=inject(HttpClient)
    /*ngOnInit(){
        this.datos=this.servicioDatos.getCompartirDatos();
        console.log(this.datos);
    }*/


    constructor(private servicioDatos:DatosService,private comm: CommService){

      this.http.post("http://127.0.0.1:8000/perfil",JSON.stringify(this.servicioDatos.getCompartirDatos('credenciales'))).subscribe((data:any)=>{
      this.perfil=data.data;
      console.log(this.perfil.id);
      });
    }

  
    ngOnInit(): void {

      }
}
