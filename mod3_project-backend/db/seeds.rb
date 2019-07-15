User.destroy_all
Task.destroy_all
CoverLetter.destroy_all
Application.destroy_all

industries = ["Accountancy, Banking and Finance", "Business, Consulting and Management", "Charity and Voluntary Work", "Creative Arts and Design", "Energy and Utilities", "Engineering and Manufacturing", "Environment and Agriculture", "Healthcare", "Hospitality and Events Management", "Information Technology", "Law", "Law Enforcement and Security", "Leisure, Sport and Tourism", "Marketing, Advertising and PR", "Media and Internet", "Property and Construction", "Public Services and Administration", "Recruitment and HR", "Retail", "Sales", "Science and Pharmaceuticals", "Social Care", "Teacher Training and Education", "Transport and Logistics"]

10.times do
    User.create(name: Faker::Name.unique.name, password: Faker::String.random(3..12), education: Faker::Job.education_level, image: Faker::LoremFlickr.image, email: Faker::Internet.email, industry: industries.sample)
end

User.create(name: "Fran", email: "francisco@fcosta.pt", password: "password", education: "Doctorate", image: "https://drive.google.com/uc?&id=1AM-P8361aVt4cB0Pl9jJs7nHQCJAUZdv", industry: industries.sample, city: "London")
User.create(name: "Endy", email: "endyranaudo@gmail.com", password: "password", education: "First Grade", industry: industries.sample, city: "London")

100.times do
    Application.create(company_name: Faker::Company.name, person_of_contact: Faker::Name.unique.name, user_id: User.all.sample.id, role: Faker::Job.title)
end

task_content = [
    "Submit application",
    "Send CV",
    "Ask HR for feedback",
    "Write cover letter",
    "Do industry research",
    "Check role specs",
    "Write email to thank for opportunity"
]

User.all.each do |user|
    rand(4..15).times do
        application = user.applications.sample
        Task.create(name: "#{task_content.sample} for #{application.company_name}", deadline: Faker::Date.forward(23), application_id: application.id, status: Faker::Boolean.boolean)
    end
end

15.times do
    CoverLetter.create(content: Faker::Lorem.paragraph_by_chars(3000, false), application_id: Application.all.sample.id)
end