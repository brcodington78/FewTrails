class Park < ApplicationRecord
    validates :name, :description, :map_url, presence: true

    has_many :parks
    


    
end
