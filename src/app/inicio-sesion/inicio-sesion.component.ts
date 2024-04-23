import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { Validators,FormBuilder,FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio-sesion',
  standalone: true,
  imports: [],
  templateUrl: './inicio-sesion.component.html',
  styleUrl: './inicio-sesion.component.scss'
})
export class InicioSesionComponent {
  loginForm!: FormGroup;
  http=inject(HttpClient);
  

  constructor(private fb: FormBuilder,private router:Router) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  login() {
    
    this.router.navigateByUrl('/perfil');
    this.http.post('http://localhost:8000/login', this.loginForm.value).subscribe();
    // Aquí puedes manejar la lógica de inicio de sesión
    
  }
}
