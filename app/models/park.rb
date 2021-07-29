class Park < ApplicationRecord
    validates :name, :map_url, :coords, presence: true

    has_many :trails,
        primary_key: :id,
        foreign_key: :park_id,
        class_name: :Trail
    


    
end
