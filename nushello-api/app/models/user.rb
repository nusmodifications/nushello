class User < ActiveRecord::Base
  validates :facebook_id, presence: true, uniqueness: true
  validates :nusnet_id, presence: true, uniqueness: true
  validates :name, presence: true
end
