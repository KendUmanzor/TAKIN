import { Component } from '@angular/core';
import { NavSimpleComponent } from "../nav-simple/nav-simple.component";
import { FootComponent } from "../foot/foot.component";

@Component({
    selector: 'app-contratos',
    standalone: true,
    templateUrl: './contratos.component.html',
    styleUrl: './contratos.component.scss',
    imports: [NavSimpleComponent, FootComponent]
})
export class ContratosComponent {

}
