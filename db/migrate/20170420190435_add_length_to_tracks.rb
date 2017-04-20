class AddLengthToTracks < ActiveRecord::Migration[5.0]
  def change
    add_column :tracks, :length, :string, null: false
  end
end
