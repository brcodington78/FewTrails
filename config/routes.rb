Rails.application.routes.draw do
  root to: "static_pages#root"
  

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resources :trails, only: [:show, :index]
    resource :session, only: [:create, :destroy, :show]
  end
end
