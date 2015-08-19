class User < ActiveRecord::Base
  belongs_to :first_major, class_name: 'Major', foreign_key: 'first_major_id'
  belongs_to :second_major, class_name: 'Major', foreign_key: 'second_major_id'
  belongs_to :residence

  has_many :active_conversations, class_name: 'Conversation', foreign_key: 'user_1_id'
  has_many :passive_conversations, class_name: 'Conversation', foreign_key: 'user_2_id'

  delegate :faculty, to: :first_major

  validates :facebook_id, presence: true, uniqueness: true
  validates :nusnet_id, presence: true, uniqueness: true
  validates :name, presence: true

  def conversations
    active_conversations | passive_conversations
  end
end
