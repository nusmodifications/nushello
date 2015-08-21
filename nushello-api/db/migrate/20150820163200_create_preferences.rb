class CreatePreferences < ActiveRecord::Migration
  def change
    create_table :preferences do |t|
      t.references :user, index: true, foreign_key: true
      t.string :gender
      t.integer :faculty_id
      t.integer :major_id
      t.integer :residence_id
      t.integer :year, array: true, default: []

      t.timestamps null: false
    end
  end
end
