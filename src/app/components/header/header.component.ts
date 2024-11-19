import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // Importar RouterModule

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule], // Incluir RouterModule aqui
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
}
