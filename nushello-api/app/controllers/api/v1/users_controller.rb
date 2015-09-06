class Api::V1::UsersController < ApplicationController
  skip_before_filter :authenticate_user_from_token!, only: [:fb_auth]

  def auth
    user_type = @user.nusnet_id.present? ? 'existingUser' : 'newUser'
    generate_api_payload(user_type)
  end

  def fb_auth
    begin
      fb_user_object = Koala::Facebook::API.new(params[:facebookToken])
          .get_object('me?fields=id,name,last_name,email,picture.width(240).height(240){url}&redirect=false')
      fb_long_live_token_info = Koala::Facebook::OAuth.new.exchange_access_token_info(params['facebookToken'])
    rescue Koala::Facebook::AuthenticationError, Koala::Facebook::OAuthTokenRequestError => e
      return generate_error_payload('Bad Request', 400, 'Bad Token')
    end

    user = User.create_or_update_from_fb_info(fb_user_object, fb_long_live_token_info)
    user_type = user.nusnet_id.present? ? 'existingUser' : 'newUser'
    generate_api_payload(user_type, { accessToken: user.access_token })
  end

  def ivle_auth
    ivle_profile = IVLE.new(params[:ivleToken]).get_profile
    return generate_error_payload('Unauthorized', 401, 'Your token is not my token.') unless ivle_profile.present?

    @user.assign_ivle_profile(ivle_profile)

    if @user.save
      generate_api_payload('ivleAuthenticated', UserSerializer.new(@user))
    else
      generate_error_payload('Bad Request', 400, @user.errors.messages)
    end
  end

  def update
    @user.bio = params[:bio] if params[:bio].present?
    @user.residence_id = params[:residenceId] if params[:residenceId].present?

    %i(personality preference).each do |setting|
      next unless params[setting].present?

      if @user.send(setting).present?
        @user.send(setting).assign_attributes(self.send(:"#{setting}_params"))
      else
        @user.send(:"build_#{setting}", self.send(:"#{setting}_params"))
      end
    end

    if @user.save
      generate_api_payload('userUpdated', UserSerializer.new(@user))
    else
      generate_error_payload('Bad Request', 400, @user.errors.messages)
    end
  end

  def matches
    users = ActiveModel::ArraySerializer.new(User.where.not(id: @user), each_serializer: MatchSerializer)
    generate_api_payload('matches', users)
  end

  def random_name
    @user.update_attribute(:fake_name, NameGenerator.random)
    generate_api_payload('newName', { fake_name: @user.fake_name })
  end

  def destroy
  end

  def show
    generate_api_payload('userProfile', UserSerializer.new(@user))
  end

  private

    def personality_params
      params.require(:personality).permit(:party, :sports, :mugger, :introvert)
    end

    def preference_params
      preference = params.require(:preference).permit(:gender, :facultyId, :majorId, :residenceId,
          :year, :filterFacebookFriends, :party, :sports, :mugger, :introvert)
      Hash[preference.map { |k, v| [k.underscore.intern, v] }]
    end
end
