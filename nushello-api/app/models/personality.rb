class Personality < ActiveRecord::Base
  belongs_to :user

  validates :party, presence: true, inclusion: { in: [true, false] }, allow_nil: true
  validates :sports, presence: true, inclusion: { in: [true, false] }, allow_nil: true
  validates :mugger, presence: true, inclusion: { in: [true, false] }, allow_nil: true
  validates :introvert, presence: true, inclusion: { in: [true, false] }, allow_nil: true
end
