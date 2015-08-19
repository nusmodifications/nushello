class Major < ActiveRecord::Base
  belongs_to :faculty

  validates :name, presence: true, uniqueness: true
end
