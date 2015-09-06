class Major < ActiveRecord::Base
  include HTTParty

  belongs_to :faculty
  has_many :home_users, class_name: 'User', foreign_key: 'first_major_id'
  has_many :other_users, class_name: 'User', foreign_key: 'second_major_id'

  validates :name, presence: true, uniqueness: true

  before_create :notify_slack, if: proc { |m| Rails.env.production? }

  def users
    home_users | other_users
  end

  def notify_slack
    self.class.post(ENV['SLACK_WEBHOOK_URL'], body: {
      text: "New Major Created: *#{name}*"
    }.to_json)
  end
end
