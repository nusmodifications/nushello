class RemoveNullConstraintsForNusnetIdAndNameInUser < ActiveRecord::Migration
  def change
    change_column_null :users, :nusnet_id, true
    change_column_null :users, :name, true
  end
end
