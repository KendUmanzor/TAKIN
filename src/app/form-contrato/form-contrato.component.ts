  import { Component , OnInit, inject} from '@angular/core';
  import { NavSimpleComponent } from "../nav-simple/nav-simple.component";
  import { DatosService } from '../../services/datos.service';

  import { RegisterComponent } from '../register/register.component';
  import { CommService } from '../service/comm.service';
  import { NavperfilComponent } from "../navperfil/navperfil.component";
  import { HttpClient } from '@angular/common/http';
  import { Router } from '@angular/router';
  import { PerfilComponent } from '../perfil/perfil.component';



import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';


import { sidebarComponent } from "../sidebar/sidebar.component";
import { ChatComponent } from "../chat/chat.component";
import { CalificacionComponent } from "../calificacion/calificacion.component";
import { EmpleadosRegistro } from '../../interfaces/empleados';

  @Component({
    selector: 'app-form-contrato',
    standalone: true,
    imports: [ReactiveFormsModule,FormsModule],
    templateUrl: './form-contrato.component.html',
    styleUrl: './form-contrato.component.scss'
  })
  export class FormContratoComponent implements OnInit {
    perfil!:EmpleadosRegistro;
    datos=
      {
        titulo:'',
        ubicacion: '',
        rubro: '',
        pago: '',
      }
      http=inject(HttpClient)

      constructor(private servicioDatos:DatosService,private contratoService: CommService) {}
    ngOnInit(): void {
      this.http.post("http://127.0.0.1:8000/perfil",JSON.stringify(this.servicioDatos.getCompartirDatos('credenciales'))).subscribe((data:any)=>{
        this.perfil=data.data;
        console.log(this.perfil.id)
    });
    }
    onSubmit() {



      this.agregarContrato(this.perfil.id,this.datos)
    }

      agregarContrato(empleadoId: number, contratoData: any) {
        this.contratoService.agregarContrato(1, contratoData).subscribe(
        );
      }
    }
