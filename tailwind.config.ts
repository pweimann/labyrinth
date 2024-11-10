import type { Config } from 'tailwindcss';
//@ts-ignore
import tw_elements from "tw-elements/dist/plugin";

export default <Partial<Config>>{
  content: ['./src/**/*.{html,js}', './node_modules/tw-elements/dist/js/**/*.js'],
  plugins: [
    tw_elements
  ],
  theme: {
    extend: {
      scale: {
        '175': '1.75',
        '200': '2',
        '225': '2.25',
        '250': '2.5',
        '300': '3',
      },
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
