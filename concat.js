const concat = require('concat.js');
(async function build() {
  const files = [
    './dist/angular-practice/browser/runtime.js',
    './dist/angular-practice/browser/polyfills.js',
    './dist/angular-practice/browser/scripts.js',
    './dist/angular-practice/browser/main.js'
  ]
  await concat(files, './dist/bundle.js');
  console.log('Files concatenated successfully');
})()
