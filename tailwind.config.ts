import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  content: ['./src/**/*.{html,js}', './node_modules/tw-elements/dist/js/**/*.js'],
  plugins: [
    require('tw-elements/dist/plugin')
  ],
  theme: {
    extend: {
      colors: {
        'purple-dark': '#382f73',
        'black-light': '#00010f',
        'purple-light': '#8083bf',
        'purple-ultra-light': '#c394d7',
        grey: '#a6a6a6',
        'black-dark': '#0d0d0d',
      }
    }
  }
}
