class CreateMajors < ActiveRecord::Migration
  def change
    create_table :majors do |t|
      t.string :name, null: false
      t.references :faculty, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
