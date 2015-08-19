class User < ActiveRecord::Base
  belongs_to :first_major, class_name: 'Major', foreign_key: 'first_major_id'
  belongs_to :second_major, class_name: 'Major', foreign_key: 'second_major_id'

  validates :facebook_id, presence: true, uniqueness: true
  validates :nusnet_id, presence: true, uniqueness: true
  validates :name, presence: true
end
