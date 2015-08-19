class AddConversationRefToMessage < ActiveRecord::Migration
  def change
    add_reference :messages, :conversation, index: true, foreign_key: true
  end
end
