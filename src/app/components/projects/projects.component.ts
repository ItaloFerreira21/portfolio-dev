import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  name: string;
  description: string;
  technologies: string[];
  link: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      name: 'Sistema de Gestão',
      description: 'Sistema para gerenciar tarefas e colaboradores em tempo real.',
      technologies: ['Angular', 'Node.js', 'PostgreSQL'],
      link: '#',
    },
    {
      name: 'E-commerce Inteligente',
      description: 'Plataforma de vendas com recomendação personalizada.',
      technologies: ['React', 'Tailwind CSS', 'MongoDB'],
      link: '#',
    },
    {
      name: 'Aplicativo Fitness',
      description: 'Aplicativo móvel para monitoramento de atividades e nutrição.',
      technologies: ['Flutter', 'Firebase'],
      link: '#',
    },
  ];
}
