class AddFakeThingsToUser < ActiveRecord::Migration
  def change
    add_column :users, :fake_name, :string
    add_column :users, :fake_profile_picture_url, :text
  end
end
