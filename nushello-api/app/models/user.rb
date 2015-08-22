class User < ActiveRecord::Base
  belongs_to :first_major, class_name: 'Major', foreign_key: 'first_major_id'
  belongs_to :second_major, class_name: 'Major', foreign_key: 'second_major_id'
  belongs_to :residence

  has_one :personality, dependent: :destroy
  has_one :preference, dependent: :destroy
  has_many :active_conversations, class_name: 'Conversation', foreign_key: 'user_1_id', dependent: :destroy
  has_many :passive_conversations, class_name: 'Conversation', foreign_key: 'user_2_id', dependent: :destroy
  has_many :messages, class_name: 'Message', foreign_key: 'user_id'

  delegate :faculty, to: :first_major

  validates :facebook_id, presence: true, uniqueness: true
  validates :nusnet_id, uniqueness: true, allow_nil: true
  validates :name, presence: true

  before_create :generate_access_token

  def conversations
    active_conversations | passive_conversations
  end

  def generate_access_token
    self.access_token = Digest::SHA2::base64digest(facebook_token)
  end
end
