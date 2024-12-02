/** @type {import('tailwindcss').Config} */


module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2563eb',    
        secondary: '#10b981',  
        dark: '#1f2937',      
      },
      animation: {
        'fade-in': 'fadeIn 1s ease forwards',
        'fade-in-delay': 'fadeIn 1s ease forwards 0.2s',
        'fade-in-up': 'fadeInUp 0.5s ease forwards',
        'blob': 'blob 7s infinite',
        'gradient': 'gradient 8s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { 
            opacity: '0',
            transform: 'translateY(20px)'
          },
          '100%': { 
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
        fadeInUp: {
          '0%': { 
            opacity: '0',
            transform: 'translateY(20px)'
          },
          '100%': { 
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
        blob: {
          '0%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
          '33%': {
            transform: 'translate(30px, -50px) scale(1.1)',
          },
          '66%': {
            transform: 'translate(-20px, 20px) scale(0.9)',
          },
          '100%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
        },
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
      },
    },
  },
  plugins: [], // Mantemos vazio por enquanto
}