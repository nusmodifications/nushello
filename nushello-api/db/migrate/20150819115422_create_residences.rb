class CreateResidences < ActiveRecord::Migration
  def change
    create_table :residences do |t|
      t.string :name, null: false
      t.decimal :latitude, precision: 10, scale: 6
      t.decimal :longitude, precision: 10, scale: 6

      t.timestamps null: false
    end
  end
end
