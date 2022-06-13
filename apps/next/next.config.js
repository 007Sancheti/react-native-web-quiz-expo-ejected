/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack5: true,
  webpack: (config, options) => {
    config.module.rules.push(      {
      test: /\.(jpe?g|png|svg|gif|ico|eot|ttf|woff|woff2|mp4|pdf|webm|mp3)$/,
      type: 'asset'
    })
    return config;
  }
}

const { withExpo } = require('@expo/next-adapter')
const withPlugins = require('next-compose-plugins')
const withTM = require('next-transpile-modules')([
  'solito',
  'dripsy',
  '@dripsy/gradient',
  '@dripsy/core',
  'moti',
  '@motify/core',
  '@motify/components',
  'app',
  'expo-av',
])

module.exports = withPlugins(
  [withTM, [withExpo, { projectRoot: __dirname }]],
  nextConfig
)

