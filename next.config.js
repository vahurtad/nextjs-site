const withSass = require('@zeit/next-sass');
const withCSS = require('@zeit/next-css')
const withOptimizedImages = require('next-optimized-images');
const withPlugins = require('next-compose-plugins');
const CompressionPlugin = require("compression-webpack-plugin");
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
  handleImages: ['jpeg', 'jpg', 'png', 'svg', 'webp', 'gif'],
  optimizeImages: true,
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
  webp: {
    preset: 'default',
    quality: 75
  }
};

const nextConfiguration = {
  target: 'serverless',
  compression: true,

};

const compressionConfiguration = {
  filename: '[path].gz[query]',
  algorithm: 'gzip',
  test: /\.js$|\.css$|\.html$/,
  threshold: 10240,
  minRatio: 0.8,
  cache: true,
}

module.exports = withPlugins([
  [withCSS, cssConfig],
  [withSass, sassConfig],
  [withOptimizedImages, optimizedImagesConfig],
  [new CompressionPlugin(), compressionConfiguration]
], nextConfiguration);
