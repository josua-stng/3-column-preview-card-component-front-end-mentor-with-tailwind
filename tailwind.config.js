module.exports = {
  // mengaktifkan mode JIT  
  mode: 'jit',
  // pastikan tetap mengkonfigurasi purge, karena jit akan menggunakannya untuk prosesnya
  purge: ['build/**/*.html', 'build/**/*.js'],
  darkMode: false,
  theme: {
    extend: {
      fontFamily:{
        deca: "'Lexend Deca', serif"
      },
      colors:{
        brightorange:"#e38826",
        darkcyan:"#006970",
        verydarkcyan:"#004241"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};