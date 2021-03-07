# react-minimal-boilerplate

No routing, no Jest, no environment variables, no fluff!
Just quick and easy getting started with React using Webpack and Babel

### Getting Started
```bash
git clone git@github.com:bytehala/react-minimal-boilerplate.git
npm install
npm start
```

---
## Making this project from scratch
https://theshravan.net/blog/the-minimal-react-project-setup-using-webpack-and-babel/

These instructions are here for posterity. Original source is above.

#### Step 1: Create project folder, and package.json file in the folder
```bash
mkdir react-minimal-boilerplate
cd react-minimal-boilerplate
npm init -y
```
#### Step 2: Install React and React DOM packages
```bash
npm install --save react react-dom
```
#### Step 3: Install Webpack, Webpack CLI and Webpack Dev Server
```bash
npm install --save-dev webpack
npm install --save-dev webpack-cli
npm install --save-dev webpack-dev-server
```
#### Step 4: Install Babel
```bash
npm install --save-dev @babel/core babel-loader
npm install --save-dev @babel/preset-env @babel/preset-react
```
> The @babel/core is the babel compiler. The babel-loader is the webpack plugin for babel. The @babel/preset-env is the Babel preset for converting ES6, ES7 and ES8 code to ES5. The @babel/preset-react is the Babel preset for all React plugins.

`We have all the required npm packages, let’s write some code. First, we need to create Babel configuration in .babelrc file to tell Babel how to transpile our ES6, ES7, ES8 and JSX code.`
#### Step 5: Create Babel configuration file `.babelrc` and put this in
```json
{
  "presets": ["@babel/preset-env", "@babel/preset-react"]
}
```

#### Step 6: Create Webpack configuration file `webpack.config.js` and put this in
```js
module.exports = {
  entry: './src/app',
  output: {
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  }
};
```
#### Step 7: Create `index.html`
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>React Hello World</title>
</head>
<body>
  <div id="app-root"></div>
  <script src="bundle.js"></script>
</body>
</html>
```
#### Step 8: Write a HelloWorld React Component `src/helloworld.js`
```js
import React, { Component } from 'react';

class HelloWorld extends Component {
  render() {
    return (<h1>Hello World, React!</h1>); 
  } 
} 

export default HelloWorld;
```
#### Step 9: Render the Component into `app-root` by creating `src/app.js`
```js
import React from 'react';
import { render } from 'react-dom';

import HelloWorld from './helloworld';

render(<Hell
oWorld />, document.getElementById('app-root'));
```
### Step 10: Add this to `package.json`
```json
"scripts": {
  "start": "webpack-dev-server --mode development --open --hot"
}
```
### Step 11: Run
```bash
npm start
```