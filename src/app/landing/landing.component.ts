import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { OficiosComponent } from "../oficios/oficios.component";
import { SugComponent } from "../sug/sug.component";
import { FootComponent } from "../foot/foot.component";

@Component({
    selector: 'app-landing',
    standalone: true,
    templateUrl: './landing.component.html',
    styleUrl: './landing.component.scss',
    imports: [NavbarComponent, OficiosComponent, SugComponent, FootComponent]
})
export class LandingComponent {

}
