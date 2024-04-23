import { Component } from '@angular/core';
import { NavSimpleComponent } from '../nav-simple/nav-simple.component'
import { sidebarComponent } from '../sidebar/sidebar.component';


@Component({
  selector: 'app-perfil-empresa',
  standalone:true,
  imports: [NavSimpleComponent,sidebarComponent],
  templateUrl: './perfil-empresa.component.html',
  styleUrl: './perfil-empresa.component.scss'
})
export class PerfilEmpresaComponent {

}
