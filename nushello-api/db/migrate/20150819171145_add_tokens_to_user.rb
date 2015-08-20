class AddTokensToUser < ActiveRecord::Migration
  def change
    add_column :users, :facebook_token, :text
    add_column :users, :ivle_token, :text
  end
end
