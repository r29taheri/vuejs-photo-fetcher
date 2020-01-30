module.exports = {
  configureWebpack: {
    output: {
      filename: new Date().getTime() + '[name].js',
      chunkFilename: new Date().getTime() + '[name].js',
    }
  },
  css: {
    loaderOptions: {
      scss: {
        prependData: `
          @import "@/styles/main.scss";
        `
      }
    }
  }
};