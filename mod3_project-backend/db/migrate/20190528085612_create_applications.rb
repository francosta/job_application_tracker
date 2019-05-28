class CreateApplications < ActiveRecord::Migration[5.2]
  def change
    create_table :applications do |t|
      t.string :person_of_contact
      t.string :task
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end
