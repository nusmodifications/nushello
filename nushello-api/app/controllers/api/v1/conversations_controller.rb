class Api::V1::ConversationsController < ApplicationController
  def index
    conversations = ActiveModel::ArraySerializer.new(@user.conversations, each_serializer: ConversationSerializer, user_id: @user.id)
    generate_api_payload('conversations', conversations)
  end

  def token
    generator = Firebase::FirebaseTokenGenerator.new(ENV['FIREBASE_SECRET'])
    generate_api_payload('firebaseToken', { firebaseToken: generator.create_token({ uid: @user.facebook_id }) })
  end
end
