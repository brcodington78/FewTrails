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
    us_state: 'California',
    description1: "Looking for a great trail in King Range Wilderness, California? FewTrails has 3 great hiking trails, views trails, wildlife trails and more, with hand-curated trail maps and driving directions as well as detailed reviews and photos from hikers, campers, and nature lovers like you. Ready for some activity? Start checking them out and you'll be out on the trail in no time!",
    coords: [40.1840764, -124.1601363],
    description2: "From beaches to high peaks commanding outstanding vistas, the King Range Wilderness is the wildest portion of the California coast. Indeed, the King Range is the longest stretch of undeveloped coastline in the United States outside of Alaska. Botanists consider the region's dune system extremely unique in that the aggressive introduced European dune grass has not yet encroached, as it has on most coastal dunes north of San Francisco. Rare coastal ancient forests of Douglas fir, madrone, and tan oak dominate the Honeydew Creek watershed. Endangered species include leafy reedgrass, California brown pelican, steelhead trout, Chinook and Coho salmon, bald eagle, peregrine falcon, northern spotted owl, and Roosevelt elk. The California Coastal Trail traverses the entire length of the area. In 2000, President Clinton designated the rocks and islands just offshore as the California Coast National Monument. Mountains, forests, streams, and coastal bluffs of the King Range Wilderness provide homes for the bald eagle, American peregrine falcon, osprey, spotted owl, Roosevelt elk, otter, gray fox, black bear, and other wildlife."
    
)

king1 = URI.open('https://fewtrails-seeds.s3.us-west-1.amazonaws.com/king_range/king_range1.jpg')
king_range.photos.attach(io: king1, filename: 'king_range1')

king2 = URI.open('https://fewtrails-seeds.s3.us-west-1.amazonaws.com/king_range/king_range2.jpg')
king_range.photos.attach(io: king2, filename: 'king_range2')

king3 = URI.open('https://fewtrails-seeds.s3.us-west-1.amazonaws.com/king_range/king_range3.jpg')
king_range.photos.attach(io: king3, filename: 'king_range3')

king4 = URI.open('https://fewtrails-seeds.s3.us-west-1.amazonaws.com/king_range/king_range4.jpg')
king_range.photos.attach(io: king4, filename: 'king_range4')

king5 = URI.open('https://fewtrails-seeds.s3.us-west-1.amazonaws.com/king_range/king_range5.jpg')
king_range.photos.attach(io: king5, filename: 'king_range5')


LCT_MTBSB = Trail.create!(
    name: 'Lost Coast Trail: Mattole to Black Sands Beach',
    us_state: 'California',
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
    us_state: 'California',
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
    us_state: 'California',
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
    us_state: 'California',
    coords: [37.5944972, -121.7111269],
    description1: "Looking for a great trail in Del Valle Regional Park, California? FewTrails has 2 great hiking trails, trail running trails, mountain biking trails and more, with hand-curated trail maps and driving directions as well as detailed reviews and photos from hikers, campers, and nature lovers like you. Ready for some activity? There are 14 moderate trails in Del Valle Regional Park ranging from 2.1 to 14.2 miles and from 593 to 1,348 feet above sea level. Start checking them out and you'll be out on the trail in no time!",
    description2: "This park is ideal for picnicking, horseback riding, boating, fishing and swimming. Lake Del Valle is located in Central Alameda County, about five miles south of the City of Livermore in the Arroya del Valle. Del Valle Dam and Lake Del Valle are features of the South Bay Aqueduct, which is part of the State Water Project."
    
)

del_pic_1 = URI.open('https://fewtrails-seeds.s3.us-west-1.amazonaws.com/del_valle/del_valle1.png')

del_valle.photos.attach(io: del_pic_1, filename: 'del_valle1.png')

del_pic_2 = URI.open('https://fewtrails-seeds.s3.us-west-1.amazonaws.com/del_valle/del_valle2.png')

del_valle.photos.attach(io: del_pic_2, filename: 'del_valle2.png')

del_pic_3 = URI.open('https://fewtrails-seeds.s3.us-west-1.amazonaws.com/del_valle/del_valle3.jpg')
                    
del_valle.photos.attach(io: del_pic_3, filename: 'del_valle3.png')

del_pic_4 = URI.open('https://fewtrails-seeds.s3.us-west-1.amazonaws.com/del_valle/del_valle4.png')

del_valle.photos.attach(io: del_pic_4, filename: 'del_valle4.png')

del_pic_5 = URI.open('https://fewtrails-seeds.s3.us-west-1.amazonaws.com/del_valle/del_valle5.png')

del_valle.photos.attach(io: del_pic_5, filename: 'del_valle5.png')



MFT = Trail.create!(
    name: 'Murietta Falls Trail',
    us_state: 'California',
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
    us_state: 'California',
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
    coords: [37.6449521, -121.7845845],
    us_state: 'California',
    description1: "Explore the most popular trails in Sycamore Grove Park with hand-curated trail maps and driving directions as well as detailed reviews and photos from hikers, campers and nature lovers like you."
)

syc1 = URI.open('https://fewtrails-seeds.s3.us-west-1.amazonaws.com/sycamore_grove/sycamore1.jpg')
sycamore_grove.photos.attach(io: syc1, filename: 'sycamore1.jpg')

syc2 = URI.open('https://fewtrails-seeds.s3.us-west-1.amazonaws.com/sycamore_grove/sycamore2.jpg')
sycamore_grove.photos.attach(io: syc2, filename: 'sycamore2.jpg')

syc3 = URI.open('https://fewtrails-seeds.s3.us-west-1.amazonaws.com/sycamore_grove/sycamore3.jpg')
sycamore_grove.photos.attach(io: syc3, filename: 'sycamore3.jpg')

syc4 = URI.open('https://fewtrails-seeds.s3.us-west-1.amazonaws.com/sycamore_grove/sycamore4.jpg')
sycamore_grove.photos.attach(io: syc4, filename: 'sycamore4.jpg')

syc5 = URI.open('https://fewtrails-seeds.s3.us-west-1.amazonaws.com/sycamore_grove/sycamore5.jpg')
sycamore_grove.photos.attach(io: syc5, filename: 'sycamore5.jpg')



SCT = Trail.create!(
    name: 'Sycamore Creek Trail',
    us_state: 'California',
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
    us_state: 'California',
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
    name: 'Arroyo Del Valle Regional Trail',
    us_state: 'California',
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

yosemite = Park.create!(
    name: 'Yosemite National Park',
    coords: [37.8534972, -119.6911929],
    us_state: 'California',
    description1: "Looking for a great trail in Yosemite National Park, California? FewTrails has 5 great hiking trails, trail running trails, views trails and more, with hand-curated trail maps and driving directions as well as detailed reviews and photos from hikers, campers, and nature lovers like you. Start checking them out and you'll be out on the trail in no time!"
)

yos1 = URI.open('https://fewtrails-seeds.s3.us-west-1.amazonaws.com/yosemite/yos1.jpg')
yosemite.photos.attach(io: yos1, filename: 'yos1.jpg')

yos2 = URI.open('https://fewtrails-seeds.s3.us-west-1.amazonaws.com/yosemite/yos2.png')
yosemite.photos.attach(io: yos2, filename: 'yos2.png')

yos3 = URI.open('https://fewtrails-seeds.s3.us-west-1.amazonaws.com/yosemite/yos3.jpg')
yosemite.photos.attach(io: yos3, filename: 'yos3.jpg')

yos4 = URI.open('https://fewtrails-seeds.s3.us-west-1.amazonaws.com/yosemite/yos4.jpg')
yosemite.photos.attach(io: yos4, filename: 'yos4.jpg')

yos5 = URI.open('https://fewtrails-seeds.s3.us-west-1.amazonaws.com/yosemite/yos5.jpg')
yosemite.photos.attach(io: yos5, filename: 'yos5.jpg')

yos6 = URI.open('https://fewtrails-seeds.s3.us-west-1.amazonaws.com/yosemite/yos6.jpg')
yosemite.photos.attach(io: yos6, filename: 'yos6.jpg')

yos7 = URI.open('https://fewtrails-seeds.s3.us-west-1.amazonaws.com/yosemite/yos7.jpg')
yosemite.photos.attach(io: yos7, filename: 'yos7.jpg')


upper_yos = Trail.create!(
    name: 'Upper Yosemite Falls Trail',
    us_state: 'California',
    park_id: yosemite.id,
    length_in_miles: 7.6,
    elevation_gain_in_feet: 3218,
    route_type: 'Out & back',
    difficulty: 'hard',
    tags: ['Camping', 'Hiking', 'Running', 'Wildflowers', 'Forest', 'Waterfall', 'Rocky', 'Wildlife', 'Fee', 'No dogs', 'River'],
    coords: [37.74213,-119.60186],
    description: "Upper Yosemite Falls Trail is a 7.6 mile heavily trafficked out and back trail located near Yosemite Valley, California that features a waterfall and is only recommended for very experienced adventurers. The trail is primarily used for hiking, running, and camping and is best used from April until October."
)

file = URI.open('https://fewtrails-seeds.s3.us-west-1.amazonaws.com/yos_trails/yos_upper.jpg')
upper_yos.photo.attach(io: file, filename: 'yos_upper.jpg')

vernal = Trail.create!(
    name: 'Vernal Falls',
    us_state: 'California',
    park_id: yosemite.id,
    length_in_miles: 4.0,
    elevation_gain_in_feet: 1279,
    route_type: 'Out & back',
    difficulty: 'hard',
    tags: ['Nature Trips', 'Hiking', 'Running', 'Wildflowers', 'River', 'Waterfall', 'Partially Paved', 'Wildlife', 'Fee', 'No dogs', 'Forest'],
    coords: [37.73252, -119.5594],
    description: "Vernal Falls is a 4 mile heavily trafficked out and back trail located near Yosemite Valley, California that features a waterfall and is rated as difficult. The trail is primarily used for hiking, walking, and nature trips and is best used from May until November."
)

file = URI.open('https://fewtrails-seeds.s3.us-west-1.amazonaws.com/yos_trails/vernal.jpg')
vernal.photo.attach(io: file, filename: 'vernal.jpg')

dome = Trail.create!(
    name: 'Half Dome Trail',
    us_state: 'California',
    park_id: yosemite.id,
    length_in_miles: 16.3,
    elevation_gain_in_feet: 5318,
    route_type: 'Out & back',
    difficulty: 'hard',
    tags: [ 'Hiking', 'Rock Climbing', 'Wildflowers', 'River', 'Waterfall', 'Partially Paved', 'Wildlife', 'Fee', 'No dogs', 'Forest'],
    coords: [37.73497, -119.566621],
    description: "Yosemite National Park charges a fee to enter. Fees are per vehicle or per motorcycle. If you are entering on foot, horse, or bike the fee is per person. You can also purchase a park-specific annual pass."
)

file = URI.open('https://fewtrails-seeds.s3.us-west-1.amazonaws.com/yos_trails/dome.jpg')
dome.photo.attach(io: file, filename: 'dome.jpg')

clouds = Trail.create!(
    name: 'Clouds Rest Trail via Tenaya Lake',
    us_state: 'California',
    park_id: yosemite.id,
    length_in_miles: 13.4,
    elevation_gain_in_feet: 3166,
    route_type: 'Out & back',
    difficulty: 'hard',
    tags: [ 'Hiking', 'Lake', 'Lake', 'Views', 'Fee', 'No dogs', 'Scramble'],
    coords: [37.73497, -119.566621],
    description: "Clouds Rest Trail via Tenaya Lake is a 13.4 mile heavily trafficked out and back trail located near Yosemite Valley, California that features a great forest setting and is rated as difficult. The trail is primarily used for hiking and is best used from May until October."
)

file = URI.open('https://fewtrails-seeds.s3.us-west-1.amazonaws.com/yos_trails/cloud.jpg')
clouds.photo.attach(io: file, filename: 'cloud.jpg')

tenaya = Trail.create!(
    name: 'Tenaya Lake Trail',
    us_state: 'California',
    park_id: yosemite.id,
    length_in_miles: 3.4,
    elevation_gain_in_feet: 196,
    route_type: 'Out & back',
    difficulty: 'easy',
    tags: [ 'Kid friendly', 'Walking', 'Hiking', 'Forest', 'Lake', 'Views', 'Fee', 'No dogs', 'Wildlife', ' Wildflowers'],
    coords: [37.82576, -119.47008],
    description: "Tenaya Lake Trail is a 3.4 mile moderately trafficked out and back trail located near Yosemite Valley, California that features a lake and is good for all skill levels. The trail is primarily used for hiking, walking, and nature trips and is best used from May until October."
)

file = URI.open('https://fewtrails-seeds.s3.us-west-1.amazonaws.com/yos_trails/tenaya.jpg')
tenaya.photo.attach(io: file, filename: 'tenaya.jpg')






john = Park.create!(
    name: 'John Muir Wilderness',
    coords: [36.9757749, -118.8142391],
    us_state: 'California',
    description1: "Looking for a great trail in John Muir Wilderness, California? AllTrails has 4 great hiking trails, trail running trails, views trails and more, with hand-curated trail maps and driving directions as well as detailed reviews and photos from hikers, campers, and nature lovers like you. Gearing up for a challenge?"
)

john1 = URI.open('https://fewtrails-seeds.s3.us-west-1.amazonaws.com/john_muir/john1.jpg')
john.photos.attach(io: john1, filename: 'john1.jpg')

john2 = URI.open('https://fewtrails-seeds.s3.us-west-1.amazonaws.com/john_muir/john2.jpg')
john.photos.attach(io: john2, filename: 'john2.jpg')

john3 = URI.open('https://fewtrails-seeds.s3.us-west-1.amazonaws.com/john_muir/john3.jpg')
john.photos.attach(io: john3, filename: 'john3.jpg')

john4 = URI.open('https://fewtrails-seeds.s3.us-west-1.amazonaws.com/john_muir/john4.jpg')
john.photos.attach(io: john4, filename: 'john4.jpg')

john5 = URI.open('https://fewtrails-seeds.s3.us-west-1.amazonaws.com/john_muir/john5.jpg')
john.photos.attach(io: john5, filename: 'john5.png')

john6 = URI.open('https://fewtrails-seeds.s3.us-west-1.amazonaws.com/john_muir/john6.jpg')
john.photos.attach(io: john6, filename: 'john6.jpg')

mt_whitney = Trail.create!(
    name: 'Mount Whitney Trail',
    us_state: 'California',
    park_id: john.id,
    length_in_miles: 20.9,
    elevation_gain_in_feet: 6646,
    route_type: 'Out & back',
    difficulty: 'hard',
    tags: [ 'Backpacking', 'Camping', 'Hiking', 'Forest', 'Lake', 'Views', 'Fee', 'No dogs', 'Wildlife', ' Wildflowers', 'Scramble', 'Rocky', 'River'],
    coords: [36.58691, -118.24024],
    description: "Mount Whitney Trail is a 20.9 mile heavily trafficked out and back trail located near Lone Pine, California that features a lake and is only recommended for very experienced adventurers. The trail is primarily used for hiking, camping, and backpacking and is best used from April until October."
)

file = URI.open('https://fewtrails-seeds.s3.us-west-1.amazonaws.com/muir_trails/whitney.jpg')
mt_whitney.photo.attach(io: file, filename: 'whitney.jpg')

duck_pass = Trail.create!(
    name: 'Duck Pass and Pika Lake Trail',
    us_state: 'California',
    park_id: john.id,
    length_in_miles: 9.5,
    elevation_gain_in_feet: 2132,
    route_type: 'Out & back',
    difficulty: 'hard',
    tags: [ 'Backpacking', 'Camping', 'Fishing', 'Nature Trips', 'Running', 'Waterfall', 'Bugs', 'Walking', 'Hiking', 'Forest', 'Lake', 'Views', 'Fee', 'No dogs', 'Wildlife', ' Wildflowers', 'Scramble', 'Rocky', 'River'],
    coords: [37.59124, -118.98913],
    description: "Duck Pass and Pika Lake Trail is a 9.5 mile heavily trafficked out and back trail located near Mammoth Lakes, California that features a lake and is rated as difficult. The trail offers a number of activity options and is best used from July until October. Dogs and horses are also able to use this trail."
)

file = URI.open('https://fewtrails-seeds.s3.us-west-1.amazonaws.com/muir_trails/duck.jpg')
duck_pass.photo.attach(io: file, filename: 'duck.jpg')

big_pine = Trail.create!(
    name: 'Big Pine Lakes Trail',
    us_state: 'California',
    park_id: john.id,
    length_in_miles: 15.2,
    elevation_gain_in_feet: 3982,
    route_type: 'Out & back',
    difficulty: 'hard',
    tags: [ 'Backpacking', 'Camping', 'Fishing', 'Nature Trips', 'Running', 'Waterfall', 'Walking', 'Hiking', 'Forest', 'Lake', 'Views', 'Fee', 'Wildlife', ' Wildflowers', 'Rocky', 'River'],
    coords: [37.59124, -118.98913],
    description: "Big Pine Lakes Trail is a 15.2 mile heavily trafficked out and back trail located near Big Pine, California that features a lake and is rated as difficult. The trail offers a number of activity options and is best used from May until October. Dogs are also able to use this trail."
)

file = URI.open('https://fewtrails-seeds.s3.us-west-1.amazonaws.com/muir_trails/big_pine.jpg')
big_pine.photo.attach(io: file, filename: 'big_pine.jpg')

rock_creek = Trail.create!(
    name: 'Rock Creek to Long Lake Trail',
    us_state: 'California',
    park_id: john.id,
    length_in_miles: 4.5,
    elevation_gain_in_feet: 557,
    route_type: 'Out & back',
    difficulty: 'hard',
    tags: [ 'Backpacking', 'Kid friendly', 'Fishing', 'Nature Trips', 'Running', 'Waterfall', 'Walking', 'Hiking', 'Forest', 'Lake', 'Views', 'Wildlife', ' Wildflowers', 'Rocky', 'River'],
    coords: [37.43465, -118.7478],
    description: "Big Pine Lakes Trail is a 15.2 mile heavily trafficked out and back trail located near Big Pine, California that features a lake and is rated as difficult. The trail offers a number of activity options and is best used from May until October. Dogs are also able to use this trail."
)

file = URI.open('https://fewtrails-seeds.s3.us-west-1.amazonaws.com/muir_trails/rock.jpg')
rock_creek.photo.attach(io: file, filename: 'rock.jpg')

sherwin = Trail.create!(
    name: 'Sherwin Lakes Trail',
    us_state: 'California',
    park_id: john.id,
    length_in_miles: 4.4,
    elevation_gain_in_feet: 882,
    route_type: 'Out & back',
    difficulty: 'hard',
    tags: [  'Nature Trips', 'Running', 'Waterfall', 'Walking', 'Hiking', 'Forest', 'Lake', 'Views', 'Wildlife', ' Wildflowers', 'Bird watching', 'River'],
    coords: [37.62444, -118.94578],
    description: "Sherwin Lakes Trail is a 4.4 mile heavily trafficked out and back trail located near Mammoth Lakes, California that features a lake and is rated as moderate. The trail is primarily used for hiking, camping, nature trips, and bird watching and is best used from April until September. Dogs are also able to use this trail."
)

file = URI.open('https://fewtrails-seeds.s3.us-west-1.amazonaws.com/muir_trails/sherwin.jpg')
sherwin.photo.attach(io: file, filename: 'sherwin.jpg')











