import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LandingComponent } from "./landing/landing.component";
//import { sidebarComponent } from './sidebar/sidebar.component';
import { HttpClientModule } from '@angular/common/http';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, LandingComponent,HttpClientModule]
})


export class AppComponent {
  title = 'appweb';
}
