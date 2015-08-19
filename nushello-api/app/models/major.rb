class Major < ActiveRecord::Base
  belongs_to :faculty
  has_many :home_users, class_name: 'User', foreign_key: 'first_major_id'
  has_many :other_users, class_name: 'User', foreign_key: 'second_major_id'

  validates :name, presence: true, uniqueness: true

  def users
    home_users | other_users
  end
end
