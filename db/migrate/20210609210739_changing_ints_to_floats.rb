class ChangingIntsToFloats < ActiveRecord::Migration[5.2]
  def change
    remove_column :trails, :length_in_miles
    add_column :trails, :length_in_miles, :float
    remove_column :trails, :coords
    add_column :trails, :coords, :integer, array: true, default: []
  end
end
