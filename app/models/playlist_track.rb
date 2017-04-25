class PlaylistTrack < ActiveRecord::Base
  validates :playlist_id, :track_id, :playlist_ord, presence: true
  validates_uniqueness_of :playlist_id, scope: :playlist_ord
  belongs_to :playlist
  belongs_to :track
end
