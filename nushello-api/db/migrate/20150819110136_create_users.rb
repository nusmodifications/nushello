class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :facebook_id, null: false
      t.string :nusnet_id, null: false
      t.string :name, null: false
      t.text :profile_picture_url
      t.string :last_name
      t.string :email
      t.string :gender
      t.integer :matriculation_year, limit: 4
      t.string :access_token

      t.timestamps null: false
    end
    add_index :users, :facebook_id, unique: true
  end
end
