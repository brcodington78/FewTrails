json.array! @parks do |park|
    json.extract! park, :id, :name, :map_url, :description
end