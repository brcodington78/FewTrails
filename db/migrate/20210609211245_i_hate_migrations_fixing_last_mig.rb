class IHateMigrationsFixingLastMig < ActiveRecord::Migration[5.2]
  def change
    remove_column :trails, :coords
    add_column :trails, :coords, :float, array: true, default: []
  end
end
