import { Routes } from '@angular/router';
import { HeroComponent } from './components/hero/hero.component'; // Importando o HeroComponent
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SkillsComponent } from './components/skills/skills.component';


export const routes: Routes = [
  { path: 'hero', component: HeroComponent }, // Rota para o HeroComponent
  { path: '', redirectTo: 'about', pathMatch: 'full' }, // Rota inicial redireciona para "about"
  { path: 'about', component: AboutComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'skills', component: SkillsComponent },
  
];
