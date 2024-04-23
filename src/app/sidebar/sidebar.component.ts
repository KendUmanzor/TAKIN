import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl:'./sidebar.component.html' ,
  styleUrl: './sidebar.component.scss'
})
export class sidebarComponent {
  isExpanded: boolean = false;

  toggleSidebar() {
    this.isExpanded = !this.isExpanded;
  }

  logout(){
    
    localStorage.clear();
  }
}
