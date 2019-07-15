Rails.application.routes.draw do
  resources :cover_letters
  resources :sessions
  resources :tasks
  resources :applications
  resources :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
