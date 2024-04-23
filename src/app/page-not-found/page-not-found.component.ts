import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { NavSimpleComponent } from "../nav-simple/nav-simple.component";

@Component({
    selector: 'app-page-not-found',
    standalone: true,
    templateUrl: './page-not-found.component.html',
    styleUrl: './page-not-found.component.scss',
    imports: [NavbarComponent, NavSimpleComponent]
})
export class PageNotFoundComponent {

}
