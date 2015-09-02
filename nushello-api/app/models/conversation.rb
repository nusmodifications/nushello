class Conversation < ActiveRecord::Base
  enum user_1_status: %i(user_1_in_progress user_1_accepted user_1_rejected)
  enum user_2_status: %i(user_2_in_progress user_2_accepted user_2_rejected)

  belongs_to :user_1, class_name: 'User', foreign_key: 'user_1_id'
  belongs_to :user_2, class_name: 'User', foreign_key: 'user_2_id'

  has_many :messages, dependent: :destroy

  validates :user_1_id, presence: true, uniqueness: { scope: :user_2_id }
  validates :user_2_id, presence: true, uniqueness: { scope: :user_1_id }

  scope :between, -> (user_1, user_2) { where('(user_1_id = ? AND user_2_id = ?) OR (user_1_id = ? AND user_2_id = ?)',
      user_1.id, user_2.id, user_2.id, user_1.id) }
end
