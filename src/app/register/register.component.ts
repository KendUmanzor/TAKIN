import { CommonModule } from '@angular/common';
import { Component, OnInit, Type, inject } from '@angular/core';
import {FormControl, FormGroup, FormsModule, Validators , ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { NavSimpleComponent } from "../nav-simple/nav-simple.component";
import { DatosService } from '../../services/datos.service';
import { ServicesService } from '../service/services.service';
import { Router } from '@angular/router';
import { CommService } from '../service/comm.service';
import { HttpClient } from '@angular/common/http';
import { loginInterface } from '../../interfaces/logininterface';


@Component({
    selector: 'app-register',
    standalone: true,
    templateUrl: './register.component.html',
    styleUrl: './register.component.scss',
    imports: [ReactiveFormsModule,FormsModule,CommonModule, NavSimpleComponent]
})

export class RegisterComponent{
  l?:loginInterface;
  email:any;
  password:any;
  submitted = false;
  http=inject(HttpClient);
  registerForm!:FormGroup
  constructor(private formBuilder: FormBuilder,private servicedata:DatosService,private router:Router){}
  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      password: ['', [Validators.required, Validators.minLength(6)]]
  });
  }

ver(){
  console.log( this.registerForm.invalid)
}
get f() { return this.registerForm.controls; }

onSubmit() {
  this.submitted = true;
  // stop here if form is invalid
  if (this.registerForm.invalid) {
      return;
  }
  //location.href="perfil";
  this.enviarDatos();
// const e=this.registerForm.get('email')?.value;
//   if (e=='user@usuario.com'){

//     this.router.navigateByUrl('/perfil');
//   }
//   if (e=='user@company.com'){

//     this.router.navigateByUrl('/empresa');
//   }
//   console.log(this.registerForm.value);

}
enviarDatos(){
  const datos:FormBuilder=this.registerForm.value;
  this.http.post('http://localhost:8000/login',this.registerForm.value).subscribe((data:any)=>{
    
    if (data.success){
      this.servicedata.setCompartirDatos(data.data,'credenciales');
      
      this.router.navigateByUrl('/perfil');
    }
    else  {
      alert(data.Error);
      
    } 
  });

}

  

}

