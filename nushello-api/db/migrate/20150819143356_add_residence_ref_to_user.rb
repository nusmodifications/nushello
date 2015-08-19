class AddResidenceRefToUser < ActiveRecord::Migration
  def change
    add_reference :users, :residence, index: true, foreign_key: true
  end
end
