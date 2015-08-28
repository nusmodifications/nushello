class Api::V1::PreferencesController < ApplicationController
  skip_before_filter :authenticate_user_from_token!, only: [:update]

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