class AddUser2StatusToConversation < ActiveRecord::Migration
  def up
    rename_column :conversations, :status, :user_1_status
    add_column :conversations, :user_2_status, :integer, default: 0
    change_column_default :conversations, :user_1_status, 0
  end

  def down
    change_column_default :conversations, :user_1_status, nil
    remove_column :conversations, :user_2_status
    rename_column :conversations, :user_1_status, :status
  end
end
