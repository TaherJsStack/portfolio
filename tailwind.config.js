/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'kedebideri': ['Kedebideri', 'sans-serif'],
        'cairo': ['Cairo', 'sans-serif'],
        'sans': ['ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {

        fog: {
          50: 'var(--color-fog-50)',
          100: 'var(--color-fog-100)',
          200: 'var(--color-fog-200)',
          300: 'var(--color-fog-300)',
          400: 'var(--color-fog-400)',
          500: 'var(--color-fog-500)',
          600: 'var(--color-fog-600)',
          700: 'var(--color-fog-700)',
          800: 'var(--color-fog-800)',
          900: 'var(--color-fog-900)',
          950: 'var(--color-fog-950)',
        },

        // Primary Colors
        primary: {
          DEFAULT: 'var(--color-primary)',
          light: 'var(--color-primary-light)',
          dark: 'var(--color-primary-dark)',
          50:  'var(--color-primary-50)',
          100: 'var(--color-primary-100)',
          200: 'var(--color-primary-200)',
          300: 'var(--color-primary-300)',
          400: 'var(--color-primary-400)',
          500: 'var(--color-primary-500)',
          600: 'var(--color-primary-600)',
          700: 'var(--color-primary-700)',
          800: 'var(--color-primary-800)',
          900: 'var(--color-primary-900)',
        },
        // Secondary Colors
        secondary: {
          DEFAULT: 'var(--color-secondary)',
          light: 'var(--color-secondary-light)',
          dark: 'var(--color-secondary-dark)',
        },
        // Accent Colors
        accent: {
          DEFAULT: 'var(--color-accent)',
          light: 'var(--color-accent-light)',
          dark: 'var(--color-accent-dark)',
        },
        // Success Colors
        success: {
          DEFAULT: 'var(--color-success)',
          light: 'var(--color-success-light)',
          dark: 'var(--color-success-dark)',
        },
        // Warning Colors
        warning: {
          DEFAULT: 'var(--color-warning)',
          light: 'var(--color-warning-light)',
          dark: 'var(--color-warning-dark)',
        },
        // Error Colors
        error: {
          DEFAULT: 'var(--color-error)',
          light: 'var(--color-error-light)',
          dark: 'var(--color-error-dark)',
        },
        // Gray Scale (Override default grays with your custom ones)
        gray: {
          50: 'var(--color-gray-50)',
          100: 'var(--color-gray-100)',
          200: 'var(--color-gray-200)',
          300: 'var(--color-gray-300)',
          400: 'var(--color-gray-400)',
          500: 'var(--color-gray-500)',
          600: 'var(--color-gray-600)',
          700: 'var(--color-gray-700)',
          800: 'var(--color-gray-800)',
          900: 'var(--color-gray-900)',
          950: 'var(--color-gray-950)',
        },
        // Background Colors
        background: {
          DEFAULT: 'var(--color-background)',
          dark: 'var(--color-background-dark)',
        },
        surface: {
          DEFAULT: 'var(--color-surface)',
          dark: 'var(--color-surface-dark)',
        },
        // Text Colors
        text: {
          DEFAULT: 'var(--color-text)',
          dark: 'var(--color-text-dark)',
          muted: 'var(--color-text-muted)',
          'muted-dark': 'var(--color-text-muted-dark)',
        },
      }
    },
  },
  plugins: [],
}