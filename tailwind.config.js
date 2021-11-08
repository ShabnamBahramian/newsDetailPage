module.exports = {
  purge: [
    '.public/index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width:{
        '400':'400px',
        '500':'500px',
        '550':'550px',
        '600':'600px',
        '650':'650px',
        '700':'700px',
        '750':'750px',
        '800':'800px',
        '820':'820px',
        '900':'900px',
        '1000':'1000px',
        '1100':'1100px',
        '1200':'1200px',
        '1300':'1300px'
      },
      height:{
        '400':'400px',
        '500':'500px',
        '600':'600px',
        '700':'700px',
        '800':'800px',
        '900':'900px',
        '950':'950px',
        '1000':'1000px',
        '1100':'1100px',
      },
      margin: {
        '530': '530px',
       },

    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
