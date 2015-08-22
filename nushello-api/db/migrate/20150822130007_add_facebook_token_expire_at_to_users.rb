class AddFacebookTokenExpireAtToUsers < ActiveRecord::Migration
  def change
    add_column :users, :facebook_token_expire_at, :datetime
  end
end
