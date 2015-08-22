class CreatePersonalities < ActiveRecord::Migration
  def change
    create_table :personalities do |t|
      t.boolean :party, null: false
      t.boolean :sports, null: false
      t.boolean :mugger, null: false
      t.boolean :introvert, null: false

      t.timestamps null: false
    end

    add_column :preferences, :party, :boolean
    add_column :preferences, :sports, :boolean
    add_column :preferences, :mugger, :boolean
    add_column :preferences, :introvert, :boolean
  end
end
