User.destroy_all
Task.destroy_all
CoverLetter.destroy_all
Application.destroy_all

10.times do
    User.create(name: Faker::Name.unique.name, password: Faker::String.random(3..12), education: Faker::Job.education_level, image: Faker::LoremFlickr.image, email: Faker::Internet.email)
end

User.create(name: "Fran", email: "francisco@fcosta.pt", password: "password", education: "Doctorate", image: "https://drive.google.com/uc?&id=1AM-P8361aVt4cB0Pl9jJs7nHQCJAUZdv")
User.create(name: "Endy", email: "endyranaudo@gmail.pt", password: "password", education: "First Grade")

100.times do
    Application.create(company_name: Faker::Company.name, person_of_contact: Faker::Name.unique.name, user_id: User.all.sample.id, role: Faker::Job.title)
end

50.times do
    Task.create(name: Faker::Lorem.sentence, deadline: Faker::Date.forward(23), application_id: Application.all.sample.id)
end

15.times do
    CoverLetter.create(content: Faker::Lorem.paragraph_by_chars(3000, false), application_id: Application.all.sample.id)
end