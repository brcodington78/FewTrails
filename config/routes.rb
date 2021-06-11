Rails.application.routes.draw do
  root to: "static_pages#root"
  

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy, :show]
    resources :trails, only: [:show]
    resources :parks, only: [:show, :index]
  end
end
