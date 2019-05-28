class CreateTasks < ActiveRecord::Migration[5.2]
  def change
    create_table :tasks do |t|
      t.string :name
      t.date :deadline
      t.references :application, foreign_key: true

      t.timestamps
    end
  end
end
