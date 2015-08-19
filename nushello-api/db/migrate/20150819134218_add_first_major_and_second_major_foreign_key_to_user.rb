class AddFirstMajorAndSecondMajorForeignKeyToUser < ActiveRecord::Migration
  def change
    add_column :users, :first_major_id, :integer
    add_column :users, :second_major_id, :integer

    add_foreign_key :users, :majors, column: :first_major_id
    add_foreign_key :users, :majors, column: :second_major_id
  end
end
