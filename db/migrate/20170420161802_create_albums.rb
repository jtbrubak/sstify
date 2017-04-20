class CreateAlbums < ActiveRecord::Migration[5.0]
  def change
    create_table :albums do |t|
      t.integer :artist_id, null: false
      t.string :title, null: false
      t.integer :year, null: false
    end
  end
end
