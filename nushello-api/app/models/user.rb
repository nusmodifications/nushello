class User < ActiveRecord::Base
  belongs_to :first_major, class_name: 'Major', foreign_key: 'first_major_id'
  belongs_to :second_major, class_name: 'Major', foreign_key: 'second_major_id'
  belongs_to :residence

  has_one :personality, dependent: :destroy, autosave: true
  has_one :preference, dependent: :destroy, autosave: true
  has_many :active_conversations, class_name: 'Conversation', foreign_key: 'user_1_id', dependent: :destroy
  has_many :passive_conversations, class_name: 'Conversation', foreign_key: 'user_2_id', dependent: :destroy
  has_many :messages, class_name: 'Message', foreign_key: 'user_id'

  delegate :faculty, to: :first_major

  validates :facebook_id, presence: true, uniqueness: true
  validates :nusnet_id, uniqueness: true, allow_nil: true
  validates :name, presence: true

  before_save :generate_access_token, if: :facebook_token_changed?

  def conversations
    active_conversations | passive_conversations
  end

  def generate_access_token
    self.access_token = Digest::SHA2::base64digest(facebook_token)
  end

  class << self
    def create_or_update_from_fb_info(fb_user_object, fb_long_live_token_info)
      user_fields = {
        facebook_id: fb_user_object['id'],
        name: fb_user_object['name'],
        last_name: fb_user_object['last_name'],
        email: fb_user_object['email'],
        profile_picture_url: fb_user_object['picture']['data']['url'],
        facebook_token: fb_long_live_token_info['access_token'],
        facebook_token_expire_at: Time.now + fb_long_live_token_info['expires_in']
      }
      user = find_by_facebook_id(fb_user_object['id'])
      if user.present?
        user.update_attributes(user_fields)
      else
        user = create(user_fields.merge(fake_name: NameGenerator.random))
      end
      user
    end
  end
end
