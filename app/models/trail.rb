class Trail < ApplicationRecord
    validates :name, :park_id, :length_in_miles, :elevation_gain_in_feet, presence: true
    validates :name, uniqueness: true

    
end
