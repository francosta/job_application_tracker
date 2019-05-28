Rails.application.routes.draw do
  get 'sessions/new'
  resources :tasks
  resources :applications
  resources :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
