# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


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