class Api::V1::UsersController < ApplicationController
  skip_before_filter :authenticate_user_from_token!, only: [:fb_auth]

  def fb_auth
    begin
      fb_user_object = Koala::Facebook::API.new(params[:facebookToken])
          .get_object('me?fields=id,name,last_name,email,picture.type(large){url}&redirect=false')
      fb_user_id = fb_user_object['id']
    rescue Koala::Facebook::AuthenticationError => e
      return generate_error_payload('Bad Request', 400, 'Bad Token')
    end

    return generate_error_payload('Bad Request', 400, 'ID/Token mismatch') unless fb_user_id == params[:facebookId]

    fb_user_fields = {
      facebook_id: fb_user_id,
      name: fb_user_object['name'],
      last_name: fb_user_object['last_name'],
      email: fb_user_object['email'],
      profile_picture_url: fb_user_object['picture']['data']['url'],
      facebook_token: params['facebookToken']
    }

    user = User.find_by_facebook_id(fb_user_id)
    user_type = 'newUser'
    if user.present?
      user.update_attributes(fb_user_fields)
      user_type = 'existingUser' if user.nusnet_id.present?
    else
      user = User.create(fb_user_fields)
    end
    generate_api_payload(user_type, { accessToken: user.access_token })
  end

  def ivle_auth
    ivle_profile = IVLE.new(params[:ivleToken]).get_profile
    return generate_error_payload('Unauthorized', 401, 'Your token is not my token.') unless ivle_profile.present?

    @user.assign_attributes(ivle_profile.slice(:nusnet_id, :name, :gender, :matriculation_year, :ivle_token))

    # Auto seed Faculties and Majors
    faculty = Faculty.find_by_name(ivle_profile[:faculty]) || Faculty.create(name: ivle_profile[:faculty])
    first_major = Major.find_by_name(ivle_profile[:first_major]) || Major.new(name: ivle_profile[:first_major])
    first_major.faculty = faculty
    first_major.save if first_major.new_record? || first_major.changed?
    second_major = ivle_profile[:second_major].blank? ? nil :
        Major.find_by_name(ivle_profile[:second_major]) || Major.create(name: ivle_profile[:second_major])

    @user.first_major = first_major
    @user.second_major = second_major

    if @user.save
      generate_api_payload('ivleAuthenticated', UserSerializer.new(@user))
    else
      generate_error_payload('Bad Request', 400, @user.errors.messages)
    end
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
