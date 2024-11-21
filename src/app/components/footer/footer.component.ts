import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';



@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, LucideAngularModule
   ],
  templateUrl: './footer.component.html',  // Vincula o HTML ao componente
  template: `
    <lucide-icon name="check-circle"></lucide-icon>`,
  styleUrls: ['./footer.component.css'] // Adicione estilos, se necessário
})
export class FooterComponent {
  currentYear: number = new Date().getFullYear(); // Ano atual para o copyright
  
}
