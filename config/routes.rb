Rails.application.routes.draw do
  root 'home#index'

  get '*path', to: 'home#index', constraints: -> (request) { !request.xhr? && request.format.html? }
end
