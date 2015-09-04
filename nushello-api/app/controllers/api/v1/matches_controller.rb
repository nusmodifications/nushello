class Api::V1::MatchesController < ApplicationController
  def show
    friend = User.find_by_id(params[:Id])
    return generate_error_payload('Not Found', 404, 'Who are you looking for?') unless friend.present?

    conversation = Conversation.between(@user, friend)
    if conversation.present? && conversation.user_1_accepted? && conversation.user_2_accepted?
      result = FriendSerializer.new(friend)
    else
      result = MatchSerializer.new(friend)
    end
    generate_api_payload('friendProfile', result)
  end

  def search
    preference = @user.preference
    faculty, major, gender = preference.get_filters
    @possibilities = User.includes(:first_major, :personality).where('majors.faculty_id = ?', faculty) unless faculty.nil?
    @possibilities = @possibilities.where(gender: gender) unless gender.nil?
    @possibilities = @possibilities.where(first_major: major) unless major.nil?

    matches = ActiveModel::ArraySerializer.new(matches(preference), each_serializer: MatchSerializer)
    generate_api_payload('matches', matches)
  end

  private

  def matches(preference)
    party, sports, mugger, introvert = preference.get_desired_personality
    result = @possibilities.where('party = ? AND sports = ? AND mugger = ? AND introvert = ?', party, sports, mugger, introvert)
    return result unless result.empty?
    not_party = @possibilities.where(personalities: { sports: sports, mugger: mugger, introvert: introvert })
    not_sports = @possibilities.where(personalities: { party: party, mugger: mugger, introvert: introvert })
    not_mugger = @possibilities.where(personalities: { party: party, sports: sports, introvert: introvert })
    not_introvert = @possibilities.where(personalities: { party: party, sports: sports, mugger: mugger })
    not_party | not_sports | not_mugger | not_introvert
  end
end
