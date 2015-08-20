class CreateConversations < ActiveRecord::Migration
  def change
    create_table :conversations do |t|
      t.integer :user_1_status, default: 0
      t.integer :user_2_status, default: 0

      t.timestamps null: false
    end
  end
end
