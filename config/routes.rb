Rails.application.routes.draw do
  devise_for :users, :controllers => { registrations: 'registrations' }

  root "tasks#index"
  resources :tasks
  resources :categories
  post "tasks/:id/toggle", to: "tasks#toggle"

  get "up" => "rails/health#show", as: :rails_health_check
end
