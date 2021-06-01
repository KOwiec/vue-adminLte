# Vue admin panel

<p align="center">
  <a href="https://github.com/vuejs/vue">
    <img src="https://img.shields.io/badge/vue-2.5.2-brightgreen.svg" alt="vue">
  </a>  
  <a href="https://github.com/ColorlibHQ/AdminLTE">
      <img src="https://img.shields.io/badge/adminlte-3.0.2-brightgreen.svg" alt="adminlte3">
  </a>
  <a href="https://github.com/ElemeFE/element">
    <img src="https://img.shields.io/badge/element--ui-2.14.1-brightgreen.svg" alt="element-ui">
  </a>   
  <a href="https://opensource.org/licenses/MIT">
      <img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="License: MIT">
    </a>  
</p>

# Overview

**vue-adminlte** is administration panel based on **[Vue.js](https://github.com/vuejs/vue)**, **[AdminLTE](https://github.com/ColorlibHQ/AdminLTE)** bootstrap template, and **[Element-UI](https://github.com/ElemeFE/element)**, UI Toolkit.
Many Javascript code is base on [vue-element-admin](https://github.com/PanJiaChen/vue-element-admin/). The current version is `v1.0.0` build on `webpack 3+`.
This version not support [Vue I18n](https://kazupon.github.io/vue-i18n/) internationalization plugin for Vue.js.
If you need it, please use [i18n Branch](https://github.com/KOwiec/tree/vue-adminLte-lang).

## Live demo

[Preview](https://kowiec.github.io/vue-adminLte)

## Preparation

You need to install [node](http://nodejs.org/) locally.  

>  Integral parts of this project:

 - [Vue](https://vuejs.org/index.html)
 
 - [AdminLTE 3](https://adminlte.io/themes/v3)
 
 - [Vuex](https://vuex.vuejs.org/)
 
 - [Vue-router](https://router.vuejs.org/)
 
 - [Axios](https://github.com/axios/axios)
 
 - [Element-UI](https://github.com/ElemeFE/element) - components
 
 - [Miragejs.com](https://miragejs.com) - fake Backend (login & register users)
 
 - [Faker.js](https://github.com/Marak/Faker.js) - simulated data 
 
 - [Vue I18n](https://kazupon.github.io/vue-i18n/) - internationalization plugin for Vue.js
 
 - [Webpack](https://github.com/webpack/webpack)
 
 - [Bootstrap](https://getbootstrap.com) 
 
 - [jQuery](https://github.com/jquery/jquery)  
  
 Understanding and learning these knowledge in advance will greatly help you on using this project.

## Project setup

With [yarn](https://yarnpkg.com/lang/en/) or [npm](https://www.npmjs.com/get-npm)

``` bash
# install dependencies
npm install 

# serve with hot reload for development (developer mode, autocompile with browsersync support for live demo)
npm run start 
This will automatically open http://localhost:8080

# build for production with minification (compile css/js files)
npm run build

# build for production and view the bundle analyzer report 
npm run build --report

# run faker server
npm run server

# run dev server and faker server
npm run start-both

# generate faker products, people, users
npm run json-products
npm run json-people
npm run json-users

# Generate all svg components
npm run svgo

# run e2e tests
npm run e2e

# run all tests
npm test
```

## Features

```txt
- Autentication
  - Register / Login / Logout
  - Validation data for login & register
  - User Registration & Login system in Miragejs (simulated Backend)

- Permission Authentication
  - Page permission
  - Directive permission
  - Permission configuration page
    
  - Multi-environment build
    - Dev / Prod
    
  - Global Features
    - Control sidebar for admiLte settings
    - Full customized AdminLTE sidebar    
    - Customized Admilte colors, text
    - Customized control sidebar
    - Dark and light styles custom themes
    - Customized navbar components       
    - Right panel for menage users accounts
    - Customized settings for groups of routes (makeCollections)
    - Layout options (AdmiLte layouts & vue-body-class)
    - Dynamic sidebar (supports multi-level routing)
    - Menu base on ElementUi menu components
    - Vue UI components base on AdminLte code (in build)
    - Settings - settings.js / local storage / cookie
    - Faker data / Faker server
    - Miragejs data / fake Backend
    - Api services / axios & fetch 
    - Api proxy json-server
    
  - Other components  
    - Back To Top
    - Breadcrump
    - Dynamic Breadcrumb    
    - Sticky
    - Svg icons
    - Search
    - Clipboard
    - Screenfull   
    - JSON Editor
    - Error Logs 
          
  - Error Pages
    - 401
    - 404
```

## Browsers support

Modern browsers and Internet Explorer 10+.

Contribution
------------
Contribution are always **welcome and recommended**.
 
 - Fork the repository ([here is the guide](https://help.github.com/articles/fork-a-repo/)).

License
-------
[MIT](http://opensource.org/licenses/MIT).

Copyright (c) 2019-present Krzysztof Owczarek


