import { CommonModule } from '@angular/common';
import { Component, Inject, OnInit, inject } from '@angular/core';
import {FormControl, FormGroup, FormsModule, Validators , ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { NavSimpleComponent } from "../nav-simple/nav-simple.component";
import { Router } from '@angular/router';
import { DatosService } from '../../services/datos.service';
import { CommService } from '../service/comm.service';
import { EmpleadosRegistro, Empleadosbusquedad, empleadoClase } from '../../interfaces/empleados';
import { HttpClient } from '@angular/common/http';


@Component({
    selector: 'app-registro-empleado',
    standalone: true,
    templateUrl: './registro-empleado.component.html',
    styleUrl: './registro-empleado.component.scss',
    imports: [ReactiveFormsModule,FormsModule,CommonModule, NavSimpleComponent]
})
export class RegistroEmpleadoComponent implements OnInit {
    submitted = false;
    empleado!:EmpleadosRegistro;
    registerForm!:FormGroup
    http=inject(HttpClient);
    constructor(private formBuilder: FormBuilder, private router:Router, private  servicioDatos:DatosService,httpclient:HttpClient){}
    ngOnInit(): void {
        this.registerForm = this.formBuilder.group({
            nombre:[''],
            apellido:[''],
            usuario:[''],
            email: ['', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
            password: ['', [Validators.required, Validators.minLength(6)]]
    });
    }
    
ver(){
    console.log( this.registerForm.invalid)
    }
get f() { return this.registerForm.controls; }

onSubmit() {
    this.empleado =this.registerForm.value;
    //this.empleado.nombre="eu";
    // this.empleado.apellido='eu';

    // this.empleado.correo='eu@gmail.com';
     //this.empleado.contraseña='password';

    
    this.submitted = true;
    if (this.f['password'].errors) {
        console.log(this.f['password'].errors);
    }
    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }

    
    this.http.post('http://127.0.0.1:8000/api/empleados/',this.empleado).subscribe();
    
    this.router.navigateByUrl('/perfil');
};

    enviarDatos(){
        const datos:FormBuilder=this.registerForm.value;
        this.servicioDatos.setCompartirDatos(datos,'datos');

    }
   
}



