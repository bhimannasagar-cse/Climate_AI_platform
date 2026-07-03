/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          900: '#0a0a0f',
          800: '#12121a',
          700: '#1a1a2e',
          600: '#16213e',
          500: '#1f2937',
        },
        neon: {
          cyan: '#00f5ff',
          blue: '#0066ff',
          purple: '#b026ff',
          pink: '#ff006e',
          green: '#39ff14',
          orange: '#ff9500',
          red: '#ff0040',
        },
        glass: {
          light: 'rgba(255,255,255,0.05)',
          medium: 'rgba(255,255,255,0.1)',
          heavy: 'rgba(255,255,255,0.15)',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
        'scan': 'scan 3s linear infinite',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px #00f5ff, 0 0 10px #00f5ff' },
          '100%': { boxShadow: '0 0 20px #00f5ff, 0 0 30px #00f5ff' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
      }
    },
  },
  plugins: [],
}