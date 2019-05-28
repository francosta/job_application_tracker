class AddCompanyToApplication < ActiveRecord::Migration[5.2]
  def change
    add_column :applications, :company_name, :string
  end
end
