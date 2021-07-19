# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'


User.destroy_all
Trail.destroy_all
Park.destroy_all

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
    name: 'King Range Wilderness',
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

file = URI.open('https://fewtrails-seeds.s3.amazonaws.com/LCT_MTBSB.jpg')

LCT_MTBSB.photo.attach(io: file, filename: 'LCT_MTBSB.jpg')

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

file = URI.open('https://fewtrails-seeds.s3.us-west-1.amazonaws.com/LCT_BFCVKC.jpg')

LCT_BFCVKC.photo.attach(io: file, filename: 'LCT_BFCVKC.jpg')

PGLVLCT = Trail.create!(
    name: 'Punta Gorda Lighthouse via Lost Coast Trail',
    park_id: king_range.id,
    length_in_miles: 7.0,
    elevation_gain_in_feet: 383,
    route_type: 'Out & Back',
    difficulty: 'moderate',
    tags: ['Rocky', 'Beach', 'Hiking', 'Nautre trips', 'Wildflowers', 'Views'],
    coords: [40.28904, -124.35569],
    description: "Punta Gorda Lighthouse via Lost Cost Trail is a 7 mile moderately trafficked out and back trail located near Petrolia, California that features beautiful wild flowers and is rated as moderate. The trail is primarily used for hiking and is best used from May until October."
)

file = URI.open('https://fewtrails-seeds.s3.us-west-1.amazonaws.com/PGLVLCT.png')

PGLVLCT.photo.attach(io: file, filename: 'PGLVLCT.png')


del_valle = Park.create!(
    name: 'Del Valle Regional Park',
    description: "This park is ideal for picnicking, horseback riding, boating, fishing and swimming. Lake Del Valle is located in Central Alameda County, about five miles south of the City of Livermore in the Arroya del Valle. Del Valle Dam and Lake Del Valle are features of the South Bay Aqueduct, which is part of the State Water Project.",
    map_url: 'https://cdn-assets.alltrails.com/static-map/production/area/10164140/parks-us-california-del-valle-regional-park-10164140-20210607081102000000000-763x240-1.png'

)

MFT = Trail.create!(
    name: 'Murietta Falls Trail',
    park_id: del_valle.id,
    length_in_miles: 13.2,
    elevation_gain_in_feet: 4370,
    route_type: 'Out & Back',
    difficulty: 'hard',
    tags: ['Dogs on leash', 'Lake', 'Hiking', 'Horseback riding', 'Wildflowers', 'Views'],
    coords: [37,57831, -121.69718],
    description: "Murietta Falls Trail is a 13.2 mile heavily trafficked out and back trail located near Livermore, California that features a lake and is rated as difficult. The trail is primarily used for hiking and horses and is accessible year-round. Dogs are also able to use this trail but must be kept on leash."
)

file = URI.open('https://fewtrails-seeds.s3.us-west-1.amazonaws.com/MFT.png')

MFT.photo.attach(io: file, filename: 'MFT.png')

ESLTLDV = Trail.create!(
    name: 'East Shore Loop to Lake Del Valle',
    park_id: del_valle.id,
    length_in_miles: 4.4,
    elevation_gain_in_feet: 849,
    route_type: 'Loop',
    difficulty: 'moderate',
    tags: ['Nature Trips', 'Lake', 'Hiking', 'Running', 'Wildflowers', 'Views', 'Forest', 'Dog friendly'],
    coords: [37.61952, -121.75258],
    description: "East Shore Loop to Lake Del Valle is a 4.4 mile heavily trafficked loop trail located near Livermore, California that features a lake and is rated as moderate. The trail offers a number of activity options and is best used from April until October. Dogs are also able to use this trail."
)

file = URI.open('https://fewtrails-seeds.s3.us-west-1.amazonaws.com/ESLTLDV.png')

ESLTLDV.photo.attach(io: file, filename: 'ESLTLDV.png')

sycamore_grove = Park.create!(
    name: 'Sycamore Grove Park',
    description: "Explore the most popular trails in Sycamore Grove Park with hand-curated trail maps and driving directions as well as detailed reviews and photos from hikers, campers and nature lovers like you.",
    map_url: 'https://cdn-assets.alltrails.com/static-map/production/area/10149900/parks-us-california-sycamore-grove-park-10149900-20210513080359000000000-763x240-1.png'
)

SCT = Trail.create!(
    name: 'Sycamore Creek Trail',
    park_id: sycamore_grove.id,
    length_in_miles: 4.9,
    elevation_gain_in_feet: 85,
    route_type: 'Loop',
    difficulty: 'moderate',
    tags: ['Nature Trips', 'Lake', 'Hiking', 'Running', 'Wildflowers', 'Views', 'Kid friendly', 'Dog friendly', 'Walking', 'Partially Paved', 'Wildlife', 'Forest', 'River', 'Historic site'],
    coords: [37.64465, -121.78189],
    description: "Sycamore Creek Trail is a 4.9 mile moderately trafficked loop trail located near Livermore, California that features a river and is good for all skill levels. The trail is primarily used for hiking, walking, running, and mountain biking. Dogs are also able to use this trail but must be kept on leash."
)
file = URI.open('https://fewtrails-seeds.s3.us-west-1.amazonaws.com/SCT.jpg')

SCT.photo.attach(io: file, filename: 'SCT.jpg')


WWTL = Trail.create!(
    name: 'Winery and Wagon Trail Loop',
    park_id: sycamore_grove.id,
    length_in_miles: 6.0,
    elevation_gain_in_feet: 521,
    route_type: 'Loop',
    difficulty: 'moderate',
    tags: ['Hiking', 'Running', 'Wildflowers', 'Views', 'Dog friendly'],
    coords: [37.64465, -121.78189],
    description: "Winery and Wagon Trail Loop is a 6 mile loop trail located near Livermore, California that features beautiful wild flowers and is rated as moderate. The trail is primarily used for hiking, running, and mountain biking."
)

file = URI.open('https://fewtrails-seeds.s3.us-west-1.amazonaws.com/WWTL.png')

WWTL.photo.attach(io: file, filename: 'WWTL.png')


ADVRT = Trail.create!(
    name: 'Arrayo Del Valle Regional Trail',
    park_id: sycamore_grove.id,
    length_in_miles: 5.9,
    elevation_gain_in_feet: 137,
    route_type: 'Out & back',
    difficulty: 'easy',
    tags: ['Hiking', 'Running', 'Wildflowers', 'Views', 'Dog friendly', 'Wheelchair friendly', 'Kid Friendly', 'Stroller friendly', 'Road Biking', 'Walking'],
    coords: [37.644492, -121.78194],
    description: "Arroyo Del Valle Regional Trail is a 5.9 mile moderately trafficked out and back trail located near Livermore, California that features beautiful wild flowers and is good for all skill levels. The trail offers a number of activity options. Dogs are also able to use this trail but must be kept on leash."
)

file = URI.open('https://fewtrails-seeds.s3.us-west-1.amazonaws.com/ADVRT.jpg')

ADVRT.photo.attach(io: file, filename: 'ADVRT.jpg')














