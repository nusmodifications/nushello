class Api::V1::ConversationsController < ApplicationController
  def index
    conversations = ActiveModel::ArraySerializer.new(@user.conversations, each_serializer: ConversationSerializer, user_id: @user.id)
    generate_api_payload('conversations', conversations)
  end
end
