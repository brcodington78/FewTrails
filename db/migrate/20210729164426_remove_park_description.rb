class RemoveParkDescription < ActiveRecord::Migration[5.2]
  def change
    remove_column :parks, :description
  end
end
