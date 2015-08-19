class Faculty < ActiveRecord::Base
  has_many :majors
  validates :name, presence: true, uniqueness: true
end
