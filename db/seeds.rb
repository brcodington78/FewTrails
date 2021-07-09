# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.delete_all

guest = User.create!(
    first_name: 'John',
    last_name: 'Doe',
    email: 'jdoe@yahoo.com',
    password: '123456'
)

u1 = User.create!(
    first_name: 'Brian',
    last_name: 'Codington',
    email: 'bcod@gmail.com',
    password: 'suhhh99'
)


king_range = Park.create!(
    name: 'King Range Wilderness, California',
    description: "From beaches to high peaks commanding outstanding vistas, the King Range Wilderness is the wildest portion of the California coast. Indeed, the King Range is the longest stretch of undeveloped coastline in the United States outside of Alaska. Botanists consider the region's dune system extremely unique in that the aggressive introduced European dune grass has not yet encroached, as it has on most coastal dunes north of San Francisco. Rare coastal ancient forests of Douglas fir, madrone, and tan oak dominate the Honeydew Creek watershed. Endangered species include leafy reedgrass, California brown pelican, steelhead trout, Chinook and Coho salmon, bald eagle, peregrine falcon, northern spotted owl, and Roosevelt elk. The California Coastal Trail traverses the entire length of the area. In 2000, President Clinton designated the rocks and islands just offshore as the California Coast National Monument. Mountains, forests, streams, and coastal bluffs of the King Range Wilderness provide homes for the bald eagle, American peregrine falcon, osprey, spotted owl, Roosevelt elk, otter, gray fox, black bear, and other wildlife.",
    map_url: 'https://cdn-assets.alltrails.com/static-map/production/area/10150945/parks-us-california-king-range-wilderness-10150945-20210517084316000000000-763x240-1.png'
    
)


LCT_MTBSB = Trail.create!(
    name: 'Lost Coast Trail: Mattole to Black Sands Beach',
    park_id: king_range.id,
    length_in_miles: 25.3,
    elevation_gain_in_feet: 1578,
    route_type: 'Point to point',
    tags: ['Backpacking','Camping','Hiking','Nature trips', 'Bird watching', 'Running', 'Beach', 'Dog friendly', 'Forest', 'Partially paved', 'River', 'Views'],
    coords: [40.28899, -124.35611],
    description: "Hike the Lost Coast Trail Matthole to Black Sands Beach to enjoy an easy backpacking trip along California's most undeveloped stretch of shoreline through the famous King Range Wilderness area. While much of the coast beckons to surfers, the Lost Coast is an 80 mile stretch of the California coast where the builders of Highway 1 decided to go around because it was too rough. This trip takes users down the Lost Coast starting at Mattole and ending at Black Sands Beach. Since parts of this route pass over beaches and adjacent to water, this route can be impassable at high tide. Users love this route as a one-way hike, so users will need to shuttle one vehicle to the end and then drive to the beginning. If users do not want to bring two cars, a shuttle service will pick them up at Black Sands Beach and shuttle users and their gear to Mattole (about 2 hours driving away) so hiking back to the vehicle is easier.",
    difficulty: 'moderate'
)

LCT_BFCVKC = Trail.create!(
    name: 'Lost Coast and Big Flat Creek via Kings Crest',
    park_id: king_range.id,
    length_in_miles: 21.0,
    elevation_gain_in_feet: 5925,
    route_type: 'Loop',
    difficulty: 'hard',
    tags: ['Backpacking', 'Camping', 'Hiking', 'Nautre trips', 'Bird watching', 'Beach', 'Forest', 'Blowdown', 'Over grown'],
    coords: [40.13244, -124.09072],
    description: "This is a great 2-3 day trek with plenty of options to extend once you get down to the Lost Coast. Offering everything from mountain views, forest terrain, creek crossings, and beach hiking - it's hard to find a comparable hike that offers this all-in-one. The main challenges to be aware of are creek crossings at calf/knee height if there has been a recent storm, tide crossings where you will need to know the local tide timetables (Shelter Cove, CA), and the ascent at the end taking you up 3,000ft in ~3mi. It is highly recommended to do this in the late-Spring/ Summer/early-Fall. Be prepared for potential snow and challenging creek crossings in the winter. The trail is overgrown in some places and can have significant blowdown from the weather, so it's best to check with the local project office about trail conditions."
)


del_valle = Park.create!(
    name: 'Del Valle Regional Park, California',
    description: "This park is ideal for picnicking, horseback riding, boating, fishing and swimming. Lake Del Valle is located in Central Alameda County, about five miles south of the City of Livermore in the Arroya del Valle. Del Valle Dam and Lake Del Valle are features of the South Bay Aqueduct, which is part of the State Water Project.",
    map_url: 'https://cdn-assets.alltrails.com/static-map/production/area/10164140/parks-us-california-del-valle-regional-park-10164140-20210607081102000000000-763x240-1.png'

)







