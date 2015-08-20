class AddUserRefToMessage < ActiveRecord::Migration
  def change
    add_reference :messages, :user, index: true, foreign_key: true
  end
end
