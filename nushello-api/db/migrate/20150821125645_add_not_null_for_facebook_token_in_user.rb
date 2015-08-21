class AddNotNullForFacebookTokenInUser < ActiveRecord::Migration
  def change
    change_column_null :users, :facebook_token, false
  end
end
