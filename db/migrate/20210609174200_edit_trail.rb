class EditTrail < ActiveRecord::Migration[5.2]
  def change
    add_column :trails, :route_type, :string
  end
end
