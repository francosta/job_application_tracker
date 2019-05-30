class Application < ApplicationRecord
  belongs_to :user
  has_many :tasks, dependent: :destroy
  has_many :cover_letters, dependent: :destroy
end
