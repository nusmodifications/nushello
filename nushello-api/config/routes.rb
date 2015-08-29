Rails.application.routes.draw do
  root to: redirect('http://nushello.com')

  namespace :api, defaults: { format: :json }, constraints: { subdomain: 'api' }, path: '/' do
    scope module: :v1, constraints: ApiConstraints.new(version: 1, default: true) do
      get 'users/auth/:facebookId/:facebookToken', to: 'users#fb_auth'
      put 'users/:facebookId/ivle', to: 'users#ivle_auth'
      get 'users/:facebookId/auth', to: 'users#auth'
      put 'users/:facebookId', to: 'users#update'
      get 'users/:facebookId', to: 'users#show'
      get 'users/:facebookId/randomName', to: 'users#random_name'
      get 'users/:facebookId/matches/:Id', to: 'matches#show'
      get 'users/:facebookId/matches', to: 'matches#search'

      get 'users/:facebookId/conversations', to: 'conversations#index'
      get 'users/:facebookId/conversations/token', to: 'conversations#token'
      post 'users/:facebookId/conversations', to: 'conversations#create'
      put 'users/:facebookId/conversations/:conversationId', to: 'conversations#update'

      get 'residences', to: 'residences#index'
      get 'residences/:residenceId', to: 'residences#show'

      get 'faculties', to: 'faculties#index'
      get 'faculties/:facultyId', to: 'faculties#show'
      get 'faculties/:facultyId/majors', to: 'faculties#majors'
    end
  end
  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  # root 'welcome#index'

  # Example of regular route:
  #   get 'products/:id' => 'catalog#view'

  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end

  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end
end
