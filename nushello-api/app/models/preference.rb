class Preference < ActiveRecord::Base
  belongs_to :user

  validate :faculty_must_exist, :major_must_exist, :residence_must_exist, :year_must_be_in_range
  validates :gender, inclusion: { in: %w(Male Female), message: "%{value} is not a valid gender" }, allow_nil: true

  validates :party, inclusion: { in: [true, false] }, allow_nil: true
  validates :sports, inclusion: { in: [true, false] }, allow_nil: true
  validates :mugger, inclusion: { in: [true, false] }, allow_nil: true
  validates :introvert, inclusion: { in: [true, false] }, allow_nil: true

  def faculty_must_exist
    errors.add(:faculty, 'does not exist') if faculty_id.present? && !Faculty.exists?(faculty_id)
  end

  def major_must_exist
    errors.add(:major, 'does not exist') if major_id.present? && !Major.exists?(major_id)
  end

  def residence_must_exist
    errors.add(:residence, 'does not exist') if residence_id.present? && !Residence.exists?(residence_id)
  end

  def year_must_be_in_range
    errors.add(:year, 'invalid range') if year.present? && year[0] > year[1]
  end
end
