class Residence < ActiveRecord::Base
  has_many :users

  validates :name, presence: true, uniqueness: true
end
