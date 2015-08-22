class AddUserRefToPersonality < ActiveRecord::Migration
  def change
    add_reference :personalities, :user, index: true, foreign_key: true
  end
end
