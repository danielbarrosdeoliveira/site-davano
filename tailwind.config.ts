import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '2rem',
      },
    },
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        davano: {
          primary: '#19FFE7',
          'primary-dark': '#4AAAA0',
          secondary: '#FE6219',
          'secondary-light': '#FF8E59',
          brown: '#BF6A43',
          'brown-dark': '#805D4D',
          'primary-darken': '#415553',
        },
      },
      fontFamily: {
        playfair: ['var(--font-playfair)', 'serif'],
        poppins: ['var(--font-poppins)', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config
