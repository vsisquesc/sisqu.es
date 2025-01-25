/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    './nuxt.config.{js,ts}',
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
 
   
      boxShadow: {
        button: '2px 2px 4px 1px #00000080',
        buttonPress: 'inset 1px 1px 1px 1px #00000080;',
        bubbleButton:
          'inset 2px 2px 6px 1px #ffffff80, inset -4px -4px 12px 1px #00000080',
        bubbleButtonPress:
          'inset 4px 4px 12px 1px #00000080, inset -2px -2px 6px 1px #ffffff80',
        card: '4px 4px 10px 0 rgb(0 0 0 / 10%);',
        highlight: '0px 0px 20px 1px #F37000',
      },
      fontFamily: {
        
        Raleway: ["var(--font-raleway)"],
        DMsans: ["var(--font-dm-sans)"],
        Epilogue: ["var(--font-epilogue)"],
        Ye: ["var(--font-ye)"],
 
      }
    },
  },
  plugins: [],
}
 