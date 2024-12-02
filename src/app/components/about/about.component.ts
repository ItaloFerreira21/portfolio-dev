import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';

interface Statistic {
  title: string;
  value: string;
  icon: string;
  color: string; // cor do icone
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './about.component.html',
})
export class AboutComponent {
  statistics: Statistic[] = [
    /* {
    title:'Projetos Concluidos',
    value: '15',
    color: 'blue-500',
    icon: '<lucide-icon name="chart-bar-big"></lucide-icon>' //icone de grafico
    
  }, */
/*     {
      title: 'Anos de Experiência',
      value: '5',
      color: 'purple-500',
      icon: '',
    }, */
   /*  {
      title: ' Satisfação',
      value: '100%',
      color: 'text-4xl font-bold text-blue-500 mb-2',
      icon: '<lucide-icon name="language"></lucide-icon>', //icone de linguagens
    }, */
    //Outras estatitiscas
  ];
  experienceYears: number = 1; // Ajuste conforme sua experiência

  experiences = [
    {
      icon: 'M13 10V3L4 14h7v7l9-11h-7z', // ícone de raio
      title: 'Dev. Full Stack',
      description: 'Especializado em criar soluções web completas e escaláveis',
    },
    {
      icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2', // ícone de documento
      title: 'Arquitetura de Software',
      description: 'Desenvolvimento de sistemas robustos e manuteníveis',
    },
    {
      icon: 'M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4', // ícone de configurações
      title: 'Otimização de Performance',
      description: 'Foco em desempenho e experiência do usuário',
    },
  ];
}
