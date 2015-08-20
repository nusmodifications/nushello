class Conversation < ActiveRecord::Base
  enum status: %i(user_1_accepted user_2_accepted user_1_rejected user_2_rejected)

  belongs_to :user_1, class_name: 'User', foreign_key: 'user_1_id'
  belongs_to :user_2, class_name: 'User', foreign_key: 'user_2_id'

  has_many :messages

  validates :user_1_id, presence: true, uniqueness: { scope: :user_2_id }
  validates :user_2_id, presence: true, uniqueness: { scope: :user_1_id }
end
