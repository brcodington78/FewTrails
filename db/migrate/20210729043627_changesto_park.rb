class ChangestoPark < ActiveRecord::Migration[5.2]
  def change
    add_column :parks, :coords, :float, array: true, default: [] 
    remove_column :parks, :map_url
    add_column :parks, :description1, :string
    add_column :parks, :description2, :string
    add_column :parks, :us_state, :string
    add_column :trails, :us_state, :string 
  end
end
