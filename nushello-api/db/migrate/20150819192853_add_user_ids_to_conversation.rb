class AddUserIdsToConversation < ActiveRecord::Migration
  def change
  	add_column :conversations, :user_1_id, :integer
  	add_column :conversations, :user_2_id, :integer

  	add_foreign_key :conversations, :users, column: :user_1_id
  	add_foreign_key :conversations, :users, column: :user_2_id
  end
end
