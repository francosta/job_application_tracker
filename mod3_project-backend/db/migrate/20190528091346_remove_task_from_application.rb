class RemoveTaskFromApplication < ActiveRecord::Migration[5.2]
  def change
    remove_column :applications, :task, :string
  end
end
