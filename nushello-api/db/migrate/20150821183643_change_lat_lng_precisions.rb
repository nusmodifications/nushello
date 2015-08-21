class ChangeLatLngPrecisions < ActiveRecord::Migration
  def up
    change_column :faculties, :latitude, :decimal, precision: 10, scale: 7
    change_column :faculties, :longitude, :decimal, precision: 10, scale: 7
    change_column :residences, :latitude, :decimal, precision: 10, scale: 7
    change_column :residences, :longitude, :decimal, precision: 10, scale: 7
  end

  def down
    change_column :faculties, :latitude, :decimal, precision: 10, scale: 6
    change_column :faculties, :longitude, :decimal, precision: 10, scale: 6
    change_column :residences, :latitude, :decimal, precision: 10, scale: 6
    change_column :residences, :longitude, :decimal, precision: 10, scale: 6
  end
end
