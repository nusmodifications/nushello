class AddFilterFacebookFriendsToPreference < ActiveRecord::Migration
  def change
    add_column :preferences, :filter_facebook_friends, :boolean, default: true
  end
end
