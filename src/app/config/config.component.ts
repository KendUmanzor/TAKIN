import { Component , OnInit, inject} from '@angular/core';
import { NavSimpleComponent } from "../nav-simple/nav-simple.component";
import { DatosService } from '../../services/datos.service';
import { FormBuilder } from '@angular/forms';
import { RegisterComponent } from '../register/register.component';
import { CommService } from '../service/comm.service';
import { NavperfilComponent } from "../navperfil/navperfil.component";
import { FormsModule } from '@angular/forms'; // Importa FormsModule aquí
import { Router } from '@angular/router';
import { PerfilComponent } from '../perfil/perfil.component';
import { EmpleadosRegistro } from '../../interfaces/empleados';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-config',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './config.component.html',
  styleUrl: './config.component.scss'
})
export class ConfigComponent implements OnInit {

  perfil!:EmpleadosRegistro;
  datos=
    {
      nombre: '',
      apellido: '',
      email: '',
      password: ''
    }
  ;
  http=inject(HttpClient)
  mostrar:any
  constructor(private formBuilder: FormBuilder,private router:Router, private servicioDatos:DatosService,private contratoService: CommService){}
  ngOnInit(): void {
      this.http.post("http://127.0.0.1:8000/perfil",JSON.stringify(this.servicioDatos.getCompartirDatos('credenciales'))).subscribe((data:any)=>{
        this.perfil=data.data;
        console.log(this.perfil.id)
    });
  };
  onSubmit() {



    this.actualizar(this.perfil.id,this.datos)
    this.router.navigateByUrl('/register')
  }

    actualizar(empleadoId: number, contratoData: any) {
      this.contratoService.actualizarempleador(empleadoId, contratoData).subscribe(
      );
    }
}
