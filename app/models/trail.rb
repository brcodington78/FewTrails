class Trail < ApplicationRecord
    validates :name, :park_id, :length_in_miles, :elevation_gain_in_feet, presence: true
    validates :name, uniqueness: true

    
    has_one_attached :photo

    belongs_to :park,
        primary_key: :id,
        foreign_key: :park_id,
        class_name: :Park

end
