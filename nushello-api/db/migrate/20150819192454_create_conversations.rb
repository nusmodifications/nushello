class CreateConversations < ActiveRecord::Migration
  def change
    create_table :conversations do |t|
      t.boolean :user_1_accepted, default: false
      t.boolean :user_2_accepted, default: false
      t.boolean :user_1_rejected, default: false
      t.boolean :user_2_rejected, default: false

      t.timestamps null: false
    end
  end
end
