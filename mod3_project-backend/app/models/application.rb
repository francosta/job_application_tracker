class Application < ApplicationRecord
  belongs_to :user
  has_many :tasks
  has_many :cover_letters
end
