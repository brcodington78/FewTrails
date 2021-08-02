json.extract! @park, :id, :name, :coords, :description1, :description2, :us_state
json.photos do 
    json.array! @park.photos do |photo|
        json.photoUrl url_for(photo) 
    end
end