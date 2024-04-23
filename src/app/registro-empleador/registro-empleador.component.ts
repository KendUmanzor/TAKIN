import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import {FormControl, FormGroup, FormsModule, Validators , ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { NavSimpleComponent } from "../nav-simple/nav-simple.component";
import { Router } from '@angular/router';
import { DatosService } from '../../services/datos.service';
import { EmpleadosRegistro } from '../../interfaces/empleados';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-registro-empleador',
    standalone: true,
    templateUrl: './registro-empleador.component.html',
    styleUrl: './registro-empleador.component.scss',
    imports: [ReactiveFormsModule,FormsModule,CommonModule, NavSimpleComponent]
})
export class RegistroEmpleadorComponent implements OnInit {
    submitted = false;
    http=inject(HttpClient);
    registerForm!:FormGroup;
    constructor(private formBuilder: FormBuilder,private servicioDatos:DatosService, private router:Router){}
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
    this.submitted = true;
    if (this.f['password'].errors) {
        console.log(this.f['password'].errors);
    }
    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }
    this.http.post('http://127.0.0.1:8000/empleadores/',this.registerForm.value).subscribe();
    this.router.navigateByUrl('/perfil');
   
    alert('Datos capturados\n\n' + JSON.stringify(this.registerForm.value));
    this.enviarDatos();
    }

    enviarDatos(){
        const datos:FormBuilder=this.registerForm.value;
       

    }
}
