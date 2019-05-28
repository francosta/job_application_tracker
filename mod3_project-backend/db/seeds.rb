# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Task.destroy_all
Application.destroy_all

10.times do
    User.create(name: Faker::Name.unique.name, password: Faker::String.random(3..12))
end

User.create(name: "Fran", password: "password")
User.create(name: "Endy", password: "password")

30.times do
    Application.create(company_name: Faker::Company.name, person_of_contact: Faker::Name.unique.name, user_id: User.all.sample.id)
end

50.times do
    Task.create(name: Faker::Lorem.sentence, deadline: Faker::Date.forward(23), application_id: Application.all.sample.id)
end