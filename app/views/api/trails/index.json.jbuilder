
json.array! @trails do |trail|
    json.extract! trail, :id, :name, :park_id, :elevation_gain_in_feet, :tags, :route_type, :description, :difficulty, :length_in_miles, :coords
    json.photoUrl url_for(trail.photo) 
end

# json.array! @trails, :id, :name, :park_id, :elevation_gain_in_feet, :tags, :route_type, :description, :difficulty, :length_in_miles, :coords

# json.array! @trails, :id, :name, :park_id, :elevation_gain_in_feet, :tags, :route_type, :description, :difficulty, :length_in_miles, :coords



# json.array! @movies do |movie|
#     json.extract! movie, :id, :title, :description, :duration, :year, :rating
#     json.poster url_for(movie.poster) 
#     json.video url_for(movie.video)
# end
  