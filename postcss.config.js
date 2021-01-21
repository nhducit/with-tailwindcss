module.exports = {
  plugins: [
    'tailwindcss',
    [
      'postcss-custom-properties',
      {
        importFrom: './styles/index.css', // => :root { --color: red }
      },
    ],
    ,
    'autoprefixer',
  ],
};
