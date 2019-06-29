const withSass = require('@zeit/next-sass');
const withCSS = require('@zeit/next-css')
const withImages = require('next-images');
const withOptimizedImages = require('next-optimized-images');

module.exports = withImages()
module.exports = withOptimizedImages({
  inlineImageLimit: 8192,
  imagesFolder: 'images',
  imagesName: '[name]-[hash].[ext]',
  optimizeImagesInDev: false,
  mozjpeg: {
    quality: 80
  },
  optipng: {
    optimizationLevel: 3
  },
  pngquant: false,
  gifsicle: {
    interlaced: true,
    optimizationLevel: 3
  },
  svgo: {
    // enable/disable svgo plugins here
  },
  webp: {
    preset: 'default',
    quality: 75
  }
  /* config for next-optimized-images */
 
  // your config for other plugins or the general next.js here...
});
module.exports = withSass({
  cssModules: true
});
module.exports = withSass(withCSS());
module.exports = ()=>withSass(withImages());