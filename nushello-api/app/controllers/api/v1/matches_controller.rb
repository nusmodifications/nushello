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
end
