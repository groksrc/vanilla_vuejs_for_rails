# Getting started with Vue.js for Rails 5.1
This README will walk you through recreating this project.

## Prereqs
* Ruby 2.4
* Rails 5.1.1

I'm using Ruby 2.4 (`ruby 2.4.1p111 (2017-03-22 revision 58053) [x86_64-darwin16]`) and Rails 5.1.1 for this guide.

## Getting started
* `rails new vanilla_vuejs_for_rails -d=postgresql --skip-turbolinks --webpack=vue`
* `git add . && git commit -m "initial commit"`

## About webpack and the webpacker Gem
* "webpack is a module bundler for modern JavaScript applications."
* The webpacker gem is written by DHH et. al. and is now included with Rails. It will install and configure webpack for you.
* It helps when working with es6+ by setting up some reasonable defaults for webpack
* You can install it in your existing apps using the `webpacker:install` rake task

## Set up the webpack.config.js
`touch webpack.config.js` and add the following:
```
const env = process.env.NODE_ENV || "development"
module.exports = require(`./config/webpack/${env}.js`)
```
Webpack reads from this file by default for the configuration. Here we're making it dynamic based on the NODE_ENV supplied.

# package.json scripts
Add a scripts block like so:
```
  "scripts": {
    "compile": "NODE_ENV=development webpack"
  },
```
Now from the terminal you should be able to do `yarn compile` and see that it works.

## Fire up Rails
`bundle exec rails server`
Yay! You're on rails

## Create a controller
`rails g controller Home index`

## Set `home#index` to the root and configure your spa (optional)
In routes.rb you should add the root route beneath `get 'home/index'`:
```
Rails.application.routes.draw do
  root 'home#index'

  get '*path', to: 'home#index', constraints: -> (request) { !request.xhr? && request.format.html? }
end
```

## Set up `javascript_pack_tag`
Inside app/views/home/index.html.erb include the following:
`<%= javascript_pack_tag 'application' %>`

This will include your application.js output on the page.


## Compile your javascript
Run `yarn compile` to build your webpack code. This is placed in /public/packs by default

## Fire up Rails
Run `bundle exec rails server` and open to `localhost:3000`. You should have a blank page, but if you open
development tools to the console you should see 'Hello World from Webpacker' from the `console.log` in application.js.

Now we're ready to focus on Vue.js

## Add an element for Vue to mount with
Back inside app/views/home/index.html.erb add the following above the `javascript_pack_tag` helper:
`<div id="app"></div>`

Make sure you put the div for the app above the javascript. If you don't, Vue will not be happy

## Update application.js to include the App
Now change the application.js to this:
```
import Vue from 'vue'
import App from './app.vue'

const vm = new Vue({
  el: '#app',
  render: h => h(App)
})
```

You can optionally remove hello_vue.js, since it won't be doing anything.

## Working with Vue.js
At this point you can `yarn compile` and `bundle exec rails server` to see the result.
