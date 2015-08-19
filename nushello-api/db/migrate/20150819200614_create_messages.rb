class CreateMessages < ActiveRecord::Migration
  def change
    create_table :messages do |t|
      t.string :content
      t.boolean :read

      t.timestamps null: false
    end
  end
end
