![template logo](logo_v2.png "template logo")

# Vue - Webpack Cordova Template

This template uses:
* [Vue 2](https://vuejs.org/)
* [Vuex](https://github.com/vuejs/vuex)
* [Webpack 4](https://webpack.github.io/)
* [Cordova](https://cordova.apache.org/)
* [Babel Loader 7](https://github.com/babel/babel-loader)

## Create project

``` bash
cordova create cordova-template com.example.hello HelloWorld --template git://github.com/loama/cordova-template-vue-webpack.git#master
```

## Add the platforms needed
``` bash
cordova platform add browser ios android
```

## Install dependencies
``` bash
npm install
```

## Usage

You can use every cordova | phonegap commands.
You just have one more command option: `-- --lr`. It starts live reload.

Example usage:
```
cordova run android -- --livereload
cordova run browser -- --livereload
```
---
