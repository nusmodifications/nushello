class CreateConversations < ActiveRecord::Migration
  def change
    create_table :conversations do |t|
      t.boolean :user_1_accepted
      t.boolean :user_2_accepted

      t.timestamps null: false
    end
  end
end
