class ChangeArtists < ActiveRecord::Migration[5.0]
  def change
    change_column :artists, :name, :string, :null => false
    change_column :artists, :bio, :text, :null => false
  end
end
