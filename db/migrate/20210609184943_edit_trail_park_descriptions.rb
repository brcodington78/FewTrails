class EditTrailParkDescriptions < ActiveRecord::Migration[5.2]
  def change
    remove_column :trails, :description
    remove_column :parks, :description
    add_column :trails, :description, :text
    add_column :parks, :description, :text
  end
end
