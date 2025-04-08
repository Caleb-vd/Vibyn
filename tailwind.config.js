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
            fadein: 'fadein 1s ease-in-out forwards',
          },
          keyframes: {
            float: {
              '0%, 100%': { transform: 'translateY(0px)' },
              '50%': { transform: 'translateY(-10px)' },
            },
            fadein: {
              '0%': { opacity: 0, transform: 'translateY(20px)' },
              '100%': { opacity: 1, transform: 'translateY(0)' },
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
