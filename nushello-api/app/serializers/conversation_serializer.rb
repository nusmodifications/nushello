class ConversationSerializer < ActiveModel::Serializer
  attributes :id, :friend, :my_status, :friend_status

  def friend
    friend_id = object.user_1_id == serialization_options[:user_id] ? object.user_2_id : object.user_1_id
    friend = User.find_by_id(friend_id)
    if object.user_1_accepted? && object.user_2_accepted?
      FriendSerializer.new(friend)
    else
      MatchSerializer.new(friend)
    end
  end

  def my_status
    status_code = object.user_1_id == serialization_options[:user_id] ? object[:user_1_status] : object[:user_2_status]
    get_status(status_code.to_i)
  end

  def friend_status
    status_code = object.user_1_id == serialization_options[:user_id] ? object[:user_2_status] : object[:user_1_status]
    get_status(status_code.to_i)
  end

  private

    def get_status(status_code)
      case status_code
      when 0
        'In Progress'
      when 1
        'Accepted'
      when 2
        'Rejected'
      else
        'Unknown'
      end
    end
end
