class Faculty < ActiveRecord::Base
  has_many :majors, dependent: :destroy
  has_many :users, through: :majors, source: :home_users

  validates :name, presence: true, uniqueness: true
end
