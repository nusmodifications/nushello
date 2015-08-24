class Api::V1::ConversationsController < ApplicationController
  def index
    conversations = ActiveModel::ArraySerializer.new(@user.conversations, each_serializer: ConversationSerializer, user_id: @user.id)
    generate_api_payload('conversations', conversations)
  end

  def create
    generate_error_payload('Not Found', 404, 'User not found') unless User.exists?(facebook_id: params[:friendFacebookId])

    friend = User.find_by_facebook_id(params[:friendFacebookId])
    conversation = Conversation.between(@user, friend)
    return generate_api_payload('conversationExists', ConversationSerializer.new(conversation)) if conversation.present?

    conversation = Conversation.create(user_1_id: @user.id, user_2_id: friend.id)
    if create_firebase_room(conversation, @user, friend)
      generate_api_payload('conversationCreated', ConversationSerializer.new(conversation))
    else
      generate_error_payload('Bad Request', 400, 'Create conversation failed')
    end
  end

  def token
    generator = Firebase::FirebaseTokenGenerator.new(ENV['FIREBASE_SECRET'])
    generate_api_payload('firebaseToken', { firebaseToken: generator.create_token({ uid: @user.facebook_id }) })
  end

  private

    def create_firebase_room(conversation, user, friend)
      client = Firebase::Client.new('https://nushello.firebaseio.com/conversations', ENV['FIREBASE_SECRET'])
      response = client.set(conversation.id, { user_1_id: user.facebook_id, user_2_id: friend.facebook_id })
      response.success?
    end
end
