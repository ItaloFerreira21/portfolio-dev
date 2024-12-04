import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Skill {
  name: string;
  level: number; // Porcentagem
  icon: string; // Caminho SVG
  color: string; // Cor do progresso
}


@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule], // Inclua o CommonModule aqui
  templateUrl: './skills.component.html',
})
export class SkillsComponent {
  skills: Skill[] = [
    {
      name: 'JavaScript',
      level: 90,
      icon: 'M3 10h18M3 14h18M3 18h18', // Ícone exemplo
      color: '#f7df1e', // Cor do progresso
    },
    {
      name: 'TypeScript',
      level: 80,
      icon: 'M9 12l2 2 4-4', // Ícone exemplo
      color: '#007acc',
    },
    {
      name: 'Angular',
      level: 85,
      icon: 'M4 4h16v16H4z', // Ícone exemplo
      color: '#dd0031',
    },
    {
      name: 'Node.js',
      level: 75,
      icon: 'M12 2l9 5v10l-9 5-9-5V7z', // Ícone exemplo
      color: '#68a063',
    },
  ];
}
