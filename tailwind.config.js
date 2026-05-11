/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: '#fdf6f0',
          50: '#fff9f5',
          100: '#fdf6f0',
          200: '#f9ede3',
        },
        blush: {
          DEFAULT: '#f5c6dc',
          light: '#fce4ef',
          dark: '#e8a0bf',
        },
        rose: {
          baker: '#c9807a',
          dark: '#a85e58',
        },
        lavender: {
          DEFAULT: '#c9b1ff',
          light: '#e8e0ff',
          dark: '#a889f0',
        },
        peach: {
          DEFAULT: '#ffd6a5',
          dark: '#f4b96b',
        },
        chocolate: {
          DEFAULT: '#3d2c2c',
          light: '#5c4040',
        },
      },
      fontFamily: {
        display: ['var(--font-cormorant)', 'serif'],
        body: ['var(--font-lato)', 'sans-serif'],
        accent: ['var(--font-cormorant)', 'serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 2s infinite',
        'float-slow': 'float 8s ease-in-out 1s infinite',
        'sparkle': 'sparkle 2.5s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'bounce-gentle': 'bounceGentle 3s ease-in-out infinite',
        'sway': 'sway 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '33%': { transform: 'translateY(-15px) rotate(2deg)' },
          '66%': { transform: 'translateY(-8px) rotate(-1deg)' },
        },
        sparkle: {
          '0%, 100%': { opacity: '0', transform: 'scale(0) rotate(0deg)' },
          '50%': { opacity: '1', transform: 'scale(1) rotate(180deg)' },
        },
        bounceGentle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        sway: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
      },
      backgroundImage: {
        'pink-gradient': 'linear-gradient(135deg, #f5c6dc 0%, #fce4ef 50%, #e8e0ff 100%)',
        'hero-gradient': 'linear-gradient(180deg, rgba(253,246,240,0) 0%, rgba(253,246,240,0.8) 100%)',
      },
      boxShadow: {
        'soft': '0 8px 32px rgba(232,160,191,0.2)',
        'pink-glow': '0 0 30px rgba(232,160,191,0.4)',
        'dreamy': '0 20px 60px rgba(201,177,255,0.15)',
      },
    },
  },
  plugins: [],
};                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              

