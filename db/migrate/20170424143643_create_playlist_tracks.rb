class CreatePlaylistTracks < ActiveRecord::Migration[5.0]
  def change
    create_table :playlist_tracks do |t|
      t.integer :track_id, null: false
      t.integer :playlist_id, null: false
      t.integer :playlist_ord, null: false
    end
  end
end
