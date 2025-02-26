import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatToolbarModule, MatIconModule, MatButtonModule, CommonModule],
  template: `
    <header class="absolute bg-black p-2 w-full top-0 z-50">
      <nav class="container mx-auto px-4 py-4">
        <div class="flex items-center justify-between ">
          <a
            href="#"
            class="text-2xl font-bold bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text hover:scale-105 transition-transform"
          >
            Italo Ferreira.dev
          </a>

          <!-- Menu para desktop -->
          <div class="hidden md:flex space-x-8 ">
            <button
              (click)="scrollTo('about')"
              class="text-gray-300 hover:text-white bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text inline-block transition-colors"
              >
              Sobre
            </button>
            <button
              (click)="scrollTo('projects')"
              class="text-gray-300 hover:text-white bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text inline-block transition-colors"
              >
              Projetos
            </button>
            <button
              (click)="scrollTo('skills')"
              class="text-gray-300 hover:text-white bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text inline-block transition-colors"
              >
              Habilidades
            </button>
            
          </div>

          <!-- Ícone do menu para mobile -->
          <button class="md:hidden text-white" (click)="toggleMenu()">
            <mat-icon>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </mat-icon>
          </button>
        </div>

        <!-- Menu mobile -->
        <div
          *ngIf="isMenuOpen"
          class="md:hidden mt-4 flex space-x-8 animate-slideIn "
        >
          <button
            (click)="scrollTo('about')"
            class="text-gray-300 hover:text-white bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text inline-block transition-colors"
          >
            Sobre
          </button>
          <button
            (click)="scrollTo('projects')"
            class="text-gray-300 hover:text-white bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text inline-block transition-colors"
          >
            Projetos
          </button>
          <button
            (click)="scrollTo('skills')"
            class="text-gray-300 hover:text-white bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text inline-block transition-colors"
          >
            Habilidades
          </button>
          
            
          
        </div>
      </nav>
    </header>
  `,
  styles: [
    `
      .animate-slideIn {
        animation: slideIn 0.5s ease-in-out;
      }

      @keyframes slideIn {
        from {
          transform: translateX(100%);
          opacity: 0;
        }
        to {
          transform: translateX(0);
          opacity: 1;
        }
      }
    `,
  ],
})
export class HeaderComponent {
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen; // Alterna o estado do menu
  }

  scrollTo(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    this.isMenuOpen = false; // Fecha o menu após o clique
  }
}
