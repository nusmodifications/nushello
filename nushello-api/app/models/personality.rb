class Personality < ActiveRecord::Base
  belongs_to :user

  validates :party, inclusion: { in: [true, false] }
  validates :sports, inclusion: { in: [true, false] }
  validates :mugger, inclusion: { in: [true, false] }
  validates :introvert, inclusion: { in: [true, false] }
end
