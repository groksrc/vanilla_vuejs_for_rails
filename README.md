# Prereqs
* Ruby 2.4
* Rails 5.1.1

# Getting started
* `rails new vanilla_vuejs_for_rails -d=postgresql --skip-turbolinks --webpack=vue`
* `git add . && git commit -m "initial commit"`

# About the webpacker Gem
* The webpacker gem is written by DHH et. al. and is now included with Rails.
* It helps when working with es6+ by setting up some reasonable defaults for webpack
* You can install it in your existing apps using the `webpacker:install` rake task

# Set up the webpack.config.js
```
const env = process.env.NODE_ENV || "development"
module.exports = require(`./config/webpack/${env}.js`)
```

# package.json scripts
Add a scripts block like so:
```
  "scripts": {
    "compile": "NODE_ENV=development webpack"
  },
```
Now from the terminal you should be able to do `yarn compile` and see that it works