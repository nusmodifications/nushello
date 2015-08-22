class Personality < ActiveRecord::Base
  belongs_to :user

  validates :party, inclusion: { in: [true, false] }, allow_nil: true
  validates :sports, inclusion: { in: [true, false] }, allow_nil: true
  validates :mugger, inclusion: { in: [true, false] }, allow_nil: true
  validates :introvert, inclusion: { in: [true, false] }, allow_nil: true
end
