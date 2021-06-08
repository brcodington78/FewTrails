class CreateTrails < ActiveRecord::Migration[5.2]
  def change
    create_table :trails do |t|
      t.string :name, null: false
      t.integer :park_id, null: false
      t.integer :length_in_miles, null: false
      t.integer :elevation_gain_in_feet, null: false
      t.string :description, null: false
      t.text :tags, array: true, default: []
      t.integer :coords, array:true, default: []
      t.timestamps
    end
    add_index :trails, :park_id
    add_index :trails, :name, unique: true

  end
end
