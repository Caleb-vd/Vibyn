module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      theme: {
        extend: {
          colors: {
            neon: '#39FF14',
          },
          animation: {
            float: 'float 3s ease-in-out infinite',
          },
          keyframes: {
            float: {
              '0%, 100%': { transform: 'translateY(0px)' },
              '50%': { transform: 'translateY(-10px)' },
            },
          },
        },
      },
      
      colors: {
        neon: '#39FF14',
      },
    },
  },
  plugins: [],
};
