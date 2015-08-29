class Api::V1::MatchesController < ApplicationController
  def search
    preference = @user.preference
    @possibilities = User.joins(:personality).where('faculty = ? AND major =? AND gender = ? AND NOT id = ?', preference.faculty,
      preference.major, preference.gender, @user.id)

    matches = ActiveModel::ArraySerializer.new(matches(preference), each_serializer: MatchSerializer)
    generate_api_payload('matches', matches)
  end

  private

  def matches(preference)
    party, sports, mugger, introvert = preference.get_desired_personality
    result = @possibilities.where('party = ? AND sports = ? AND mugger = ? AND introvert = ?', party, sports, mugger, introvert)
    return result unless result.empty?
    not_party = @possibilities.where(sports: sports).where(mugger: mugger).where(introvert: introvert)
    not_sports = @possibilities.where(party: party).where(mugger: mugger).where(introvert: introvert)
    not_mugger = @possibilities.where(party: party).where(sports: sports).where(introvert: introvert)
    not_introvert = @possibilities.where(party: party).where(sports: sports).where(mugger: mugger)
    not_party | not_sports | not_mugger | not_introvert
  end

  def random(pool = nil)
    pool = User.where.not(id: @user) if pool.blank?
    result = pool.limit(8)
    users = ActiveModel::ArraySerializer.new(result, each_serializer: MatchSerializer)
  end

  def search
    preference = @user.preference
    return generate_api_payload('matches', random) unless preference.present?
    faculty, major, gender = preference.get_filters
    @possibilities = User.joins(:first_major, :personality)
    @possibilities = @possibilities.where('majors.faculty_id = ?', faculty) unless faculty.nil?
    @possibilities = @possibilities.where(gender: gender) unless gender.nil?
    @possibilities = @possibilities.where(first_major: major) unless major.nil?

    matches_by_preference = matches(preference)
    matches = matches_by_preference.empty? ? random(@possibilities) : ActiveModel::ArraySerializer.new(matches_by_preference, each_serializer: MatchSerializer)
    generate_api_payload('matches', matches)
  end

  private

  def matches(preference)
    desires = {party: [true, false], sports: [true, false], mugger: [true, false], introvert: [true, false]}
    preference.get_desired_personality.each do |k, v|
      desires[k] = v unless v.nil?
    end
    party, sports, mugger, introvert = desires[:party], desires[:sports], desires[:mugger], desires[:introvert]

    result = @possibilities.where(personalities: { party: party, sports: sports, mugger: mugger, introvert: introvert })
    return result unless result.empty?
    not_party = @possibilities.where(personalities: { sports: sports, mugger: mugger, introvert: introvert })
    not_sports = @possibilities.where(personalities: { party: party, mugger: mugger, introvert: introvert })
    not_mugger = @possibilities.where(personalities: { party: party, sports: sports, introvert: introvert })
    not_introvert = @possibilities.where(personalities: { party: party, sports: sports, mugger: mugger })
    not_party | not_sports | not_mugger | not_introvert
  end
end
