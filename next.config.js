const withSass = require('@zeit/next-sass');
const withCSS = require('@zeit/next-css')
const withOptimizedImages = require('next-optimized-images');
const withPlugins = require('next-compose-plugins');
// const webpack = require('webpack');
// const { parsed: localEnv } = require('dotenv').config()

const cssConfig = {
}
const sassConfig = {
};

const optimizedImagesConfig = {
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
};

const nextConfiguration = {
  target: 'serverless',

};

module.exports = withPlugins([
  [withCSS, cssConfig],
  [withSass, sassConfig],
  [withOptimizedImages, optimizedImagesConfig],
], nextConfiguration);
