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