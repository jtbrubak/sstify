class PlaylistTrack < ActiveRecord::Base
  validates :playlist_id, :track_id, :playlist_ord, presence: true
  belongs_to :playlist
  belongs_to :track
end
