class AddLastActivityAtToUser < ActiveRecord::Migration
  def change
    add_column :users, :last_activity_at, :datetime
    add_column :users, :online, :boolean, default: true
  end
end
