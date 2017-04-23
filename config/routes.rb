Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
   resources :albums, only: [:show, :index]
   resources :artists, only: [:show, :index]
   resources :users, only: [:create, :show]
   resource :session, only: [:create, :destroy, :show]
  end
  root "static_pages#root"
end
