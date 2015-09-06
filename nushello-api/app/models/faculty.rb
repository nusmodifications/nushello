class Faculty < ActiveRecord::Base
  include HTTParty

  has_many :majors, dependent: :destroy
  has_many :users, through: :majors, source: :home_users

  validates :name, presence: true, uniqueness: true

  before_create :notify_slack, if: -> { Rails.env.production? }

  def notify_slack
    self.class.post(ENV['SLACK_WEBHOOK_URL'], body: {
      text: "New Faculty Created: *#{name}*"
    }.to_json)
  end
end
