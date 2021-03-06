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

  def random(gender, pool = nil)
    pool = User.where.not(id: @user).where(gender: gender) if pool.blank?
    result = pool.limit(3)
    users = ActiveModel::ArraySerializer.new(result, each_serializer: MatchSerializer)
  end

  def search
    preference = @user.preference
    return generate_api_payload('matches', random) unless preference.present?
    faculty, major, gender = preference.get_filters
    @possibilities = User.joins(:first_major).where.not(id: @user)
    @possibilities = @possibilities.where('majors.faculty_id = ?', faculty) unless faculty.nil?
    @possibilities = @possibilities.where(gender: gender) unless gender.nil?
    @possibilities = @possibilities.where(first_major: major) unless major.nil?

    # matches_by_preference = matches(preference)
    # matches = matches_by_preference.empty? ? random(gender, @possibilities) : ActiveModel::ArraySerializer.new(matches_by_preference, each_serializer: MatchSerializer)
    generate_api_payload('matches', random(gender, @possibilities))
  end

  private

  def matches(preference)
    desires = {party: [true, false], sports: [true, false], mugger: [true, false], introvert: [true, false]}
    preference.get_desired_personality.each do |k, v|
      desires[k] = v unless v.nil?
    end
    party, sports, mugger, introvert = desires[:party], desires[:sports], desires[:mugger], desires[:introvert]

    result = @possibilities.where(personalities: { party: party, sports: sports, mugger: mugger, introvert: introvert }).limit(3)
    return result unless result.empty?
    not_party = @possibilities.where(personalities: { sports: sports, mugger: mugger, introvert: introvert })
    not_sports = @possibilities.where(personalities: { party: party, mugger: mugger, introvert: introvert })
    not_mugger = @possibilities.where(personalities: { party: party, sports: sports, introvert: introvert })
    not_introvert = @possibilities.where(personalities: { party: party, sports: sports, mugger: mugger })
    result = not_party | not_sports | not_mugger | not_introvert
    result[0..2]
  end
end
