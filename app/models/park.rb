class Park < ApplicationRecord
    validates :name, :coords, presence: true

    has_many_attached :photos

    has_many :trails,
        primary_key: :id,
        foreign_key: :park_id,
        class_name: :Trail
    


    
end
