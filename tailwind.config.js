/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        red:    { DEFAULT: '#e3241b', 2: '#ff3b30' },
        navy:   { DEFAULT: '#0a0a0a', 2: '#18181b' },
        muted:  '#52525b',
        dim:    '#9a9aa3',
        bg2:    '#f4f4f5',
        tint:   '#fafafa',
        whatsapp: '#25d366',
        line:   'rgba(0,0,0,0.08)',
        line2:  'rgba(0,0,0,0.14)',
      },
      fontFamily: {
        sora:  ['Sora', 'sans-serif'],
        inter: ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        card: '18px',
        pill: '999px',
      },
      maxWidth: {
        site: '1200px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
