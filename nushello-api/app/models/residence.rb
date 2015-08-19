class Residence < ActiveRecord::Base
  validates :name, presence: true, uniqueness: true
end
