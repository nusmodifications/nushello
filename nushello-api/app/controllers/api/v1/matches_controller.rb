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
end