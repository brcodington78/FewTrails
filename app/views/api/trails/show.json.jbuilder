json.extract! @trail, :id, :name, :park_id, :elevation_gain_in_feet, :tags, :description, :difficulty, :length_in_miles, :coords
json.photoUrl url_for(@trail.photo) 