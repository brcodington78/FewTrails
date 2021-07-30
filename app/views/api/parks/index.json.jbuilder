json.array! @parks do |park|
    json.extract! park, :id, :name, :coords, :description1, :description2, :us_state
end