class Api::V1::ConversationsController < ApplicationController
  USER_STATUS = { 'In Progress' => 0, 'Accepted' => 1, 'Rejected' => 2 }

  def index
    conversations = [] ### !!! Hack !!! ### In order to pass a context into the serializer.
    @user.conversations.each do |c|
      conversations.push(ConversationSerializer.new(c, context: @user.id))
    end
    generate_api_payload('conversations', conversations)
  end

  def create
    generate_error_payload('Not Found', 404, 'User not found') unless User.exists?(id: params[:friendId])

    friend = User.find_by_id(params[:friendId])
    conversation = Conversation.between(@user, friend)
    return generate_api_payload('conversationExists', ConversationSerializer.new(conversation, context: @user.id)) if conversation.present?

    conversation = Conversation.create(user_1_id: @user.id, user_2_id: friend.id)
    if create_firebase_room(conversation, @user, friend)
      generate_api_payload('conversationCreated', ConversationSerializer.new(conversation, context: @user.id))
    else
      generate_error_payload('Bad Request', 400, 'Create conversation failed')
    end
  end

  def update
    conversation = Conversation.find_by_id(params[:conversationId])
    return generate_error_payload('Not Found', 404, 'Conversation not found') if conversation.blank?
    return generate_error_payload('Bad Request', 400, 'Invalid status') if USER_STATUS.keys.exclude?(params[:status])
    unless conversation.user_1_id == @user.id || conversation.user_2_id == @user.id
      return generate_error_payload('Unauthorized', 401, 'You bloody stalker!')
    end

    if @user.id == conversation.user_1_id
      conversation.update_attribute(:user_1_status, USER_STATUS[params[:status]])
    else
      conversation.update_attribute(:user_2_status, USER_STATUS[params[:status]])
    end
    generate_api_payload('statusUpdated', ConversationSerializer.new(conversation, context: @user.id))
  end

  def token
    generator = Firebase::FirebaseTokenGenerator.new(ENV['FIREBASE_SECRET'])
    generate_api_payload('firebaseToken', { firebaseToken: generator.create_token({ uid: @user.id.to_s }) })
  end

  private

    def create_firebase_room(conversation, user, friend)
      client = Firebase::Client.new('https://nushello.firebaseio.com/conversations', ENV['FIREBASE_SECRET'])
      response = client.set(conversation.id, { user_1_id: user.id.to_s, user_2_id: friend.id.to_s })
      response.success?
    end
end
