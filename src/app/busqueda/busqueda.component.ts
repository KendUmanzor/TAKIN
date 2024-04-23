import { Component, inject, signal} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { CommService } from '../service/comm.service';
import { NavSimpleComponent  } from "../nav-simple/nav-simple.component";
import { CommonModule } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Empleadosbusquedad,empleadoClase } from '../../interfaces/empleados';
@Component({
    selector: 'app-busqueda',
    standalone: true,
    templateUrl: './busqueda.component.html',
    styleUrl: './busqueda.component.scss',
    imports: [FormsModule, NavSimpleComponent,CommonModule]
})
export class BusquedaComponent {
  URLAPI:string='http://localhost:8000/api/empleado/';
  [x: string]: any;
  busqueda= {target:''};
  mostrar:any
  mostrar0:any
  empleados:Empleadosbusquedad[]=[];
  http=inject(HttpClient);
  empleado=new empleadoClase("e","s",2,"electricista",'armario',"es@user.com");
  x:string='';
  flag:boolean=true;
  head:HttpHeaders | undefined;
  name:string=''

  trabajosInformales: string[] = [
    "Electricista",
    "Albañil",
    "Tablayesero o yesero",
    "Ceramiquero",
    "Pintor",
    "Fontanero",
    "Carpintero",
    "Herrero",
    "Soldador",
    "Jardinero o jardinera",
    'mecanico'
];

  constructor(   
    private router:Router,private comm:CommService, private httpclient:HttpClient,){
       this.head=new HttpHeaders({'content-type':'application-json'});
    }
  
  
  ngOnInit(){
    this.http.get<Empleadosbusquedad []>('http://127.0.0.1:8000/api/empleados/').subscribe((data )=> {
      
      this.empleados=data;

      console.log(this.empleados,this.empleado);
    
    });

  }
  c(){
    this.head=new HttpHeaders({'content-type':'application-json'});
    console.log(this.empleado);
    this.http.post('http://127.0.0.1:8000/api/empleados/',this.empleado).subscribe();
    this.http.put<Empleadosbusquedad>('http://127.0.0.1:8000/api/empleados/',this.empleado,{headers:this.head});
  }
  //getapi():Observable<any>{
    //return this.httpclient.get(this.URLAPI).pipe(res => res)
  //}
  show() {
    this.comm.datos(this.busqueda.target).subscribe(x => this.mostrar=JSON.stringify(x,undefined));
    this.mostrar0=JSON.parse(this.mostrar[0]);
    
    //this.mostrar=JSON.stringify(x,null,2)
    //this.mostrar= this.comm.datos().subscribe(x=> console.log(x))
    //this.srv.currentUser1.subscribe(x=> console.log(x));
    //console.log(this.srv.currentUserSubject.getValue());

  }
  meca(texto:string){
    this.flag=false;
    this.x=texto;
  }

  buscarNombre(n:string){
    this.name=n;

}}