class ChangeLengthColumnType < ActiveRecord::Migration[5.0]
  def change
    remove_column :tracks, :length
    add_column :tracks, :length, :integer, null: false
  end
end
