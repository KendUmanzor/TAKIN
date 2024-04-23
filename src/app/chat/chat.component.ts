import { Component } from '@angular/core';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss'
})
export class ChatComponent {
  // Propiedades para el estado del chat
  chatDisplay: 'flex' | 'none' = 'none'; // Tipo DisplayType

  // Función para mostrar/ocultar el chat con animación
  toggleChat(): void {
    this.chatDisplay = this.chatDisplay === 'flex' ? 'none' : 'flex';
  }
}