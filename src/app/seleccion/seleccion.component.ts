import { Component } from '@angular/core';
import { NavSimpleComponent } from "../nav-simple/nav-simple.component";

// #region COMPONENT
@Component({
    selector: 'app-seleccion',
    standalone: true,
    templateUrl: './seleccion.component.html',
    styleUrl: './seleccion.component.scss',
    imports: [NavSimpleComponent]
})
export class SeleccionComponent {

}
