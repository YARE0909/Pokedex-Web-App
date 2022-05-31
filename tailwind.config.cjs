module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.svelte'],
  theme: {
    extend: {
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
      }
    }
  },
  plugins: [
    require('tailwind-scrollbar'),
],
};
