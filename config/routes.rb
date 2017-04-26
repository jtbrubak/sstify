Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
   resources :albums, only: [:show, :index]
   resources :artists, only: [:show, :index]
   resources :users, only: [:create, :show]
   resources :playlists, only: [:show, :create, :destroy]
   resources :playlist_tracks, only: [:create, :destroy]
   resource :session, only: [:create, :destroy, :show]
  end
  root "static_pages#root"
end
