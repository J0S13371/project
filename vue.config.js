module.exports = {
  runtimeCompiler:true,
  pages: {
    index: {
      entry: 'src/main.ts',
      title: 'REPLACEME - Vueconfig'
    }
  },  
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/assets/styles/main.scss";`
      }
    }
  }
};
