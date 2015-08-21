class Api::V1::UsersController < ApplicationController
  skip_before_filter :authenticate_user_from_token!, only: [:auth, :create]

  def auth
    begin
      token_id = Koala::Facebook::API.new(params[:facebookToken]).get_object('me')['id']
    rescue Koala::Facebook::AuthenticationError => e
      return generate_error_payload('Bad Request', 400, 'Bad Token')
    end

    return generate_error_payload('Bad Request', 400, 'ID/Token mismatch') unless token_id == params[:facebookId]

    user = User.find_by_facebook_id(token_id)
    if user.present?
      generate_api_payload('existingUser', { data: { accessToken: user.access_token } })
    else
      generate_api_payload('newUser')
    end
  end

  def create
  end

  def update
  end

  def destroy
  end

  def index
  end

  def show
  end
end
