class Conversation < ActiveRecord::Base
	belongs_to :user_1, class_name: 'User', foreign_key: 'first_major_id'
  belongs_to :user_2, class_name: 'User', foreign_key: 'second_major_id'
end
