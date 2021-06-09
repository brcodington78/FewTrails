class CreateParks < ActiveRecord::Migration[5.2]
  def change
    create_table :parks do |t|
      t.string :name, null: false
      t.string :description, null: false
      t.string :map_url, null: false
      t.timestamps
    end
    add_index :parks, :name, unique: true
  end
end
