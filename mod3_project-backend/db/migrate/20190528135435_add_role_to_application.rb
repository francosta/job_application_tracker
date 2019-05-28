class AddRoleToApplication < ActiveRecord::Migration[5.2]
  def change
    add_column :applications, :role, :string
  end
end
